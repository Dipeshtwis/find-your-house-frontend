import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchFavourite } from '../utils/util';
import { getHouseAction } from '../actions/index';
import HouseCard from '../components/HouseCard';

class Favourite extends Component {
  componentDidMount = () => {
    fetchFavourite(localStorage.getItem('token'))
      .then(res => {
        const uniq = [...new Set(res.data.map(x => x.id))].map(
          id => res.data.find(s => s.id === id),
        );
        const { getHouse } = this.props;
        getHouse(uniq);
      })
      .catch(err => err);
  }

  renderHelper = () => {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/dashboard" />;
    }
    let res = null;
    const { houses } = this.props;
    if (houses.length > 0) {
      res = houses.map(house => (<HouseCard key={house.id} alreadyFav house={house} />));
    } else {
      res = (
        <p className="para-fav">You have no favourite House</p>
      );
    }

    return res;
  };

  render() {
    return (
      <>
        <h1 className="favi">Favourites</h1>
        <div className="house">
          {this.renderHelper()}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  houses: state.houses,
});

const mapDispatchToProps = dispatch => ({
  getHouse: data => dispatch(getHouseAction(data)),
});

Favourite.defaultProps = {
  houses: PropTypes.shape({
    id: '',
    name: '',
    price: '',
    description: '',
    photo: '',
  }),
};

Favourite.propTypes = {
  houses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  getHouse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
