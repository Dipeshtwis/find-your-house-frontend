import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchFavourite } from '../utils/util';
import { getFavAction } from '../actions/index';
import FavCard from '../components/FavCard';

class Favourite extends Component {
  componentDidMount = () => {
    fetchFavourite(localStorage.getItem('token'))
      .then(res => {
        const uniq = [...new Set(res.data.map(x => x.id))].map(
          id => res.data.find(s => s.id === id),
        );
        const { getFav } = this.props;
        getFav(uniq);
      })
      .catch(err => err);
  }

  renderHelper = () => {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/dashboard" />;
    }
    let res = null;
    const { favs } = this.props;
    if (favs.length > 0) {
      res = favs.map(fav => (<FavCard key={fav.id} fav={fav} />));
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
  favs: state.favs,
});

const mapDispatchToProps = dispatch => ({
  getFav: data => dispatch(getFavAction(data)),
});

Favourite.defaultProps = {
  favs: PropTypes.shape({
    id: '',
    name: '',
    price: '',
    description: '',
    photo: '',
  }),
};

Favourite.propTypes = {
  favs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  getFav: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
