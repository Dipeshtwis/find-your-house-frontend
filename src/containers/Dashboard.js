import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getHouseAction } from '../actions/index';
import { fetchHouse } from '../utils/util';
import loader from '../assets/img/loader.gif';
import HouseCard from '../components/HouseCard';
import '../assets/stylesheet/house.css';

class Dashboard extends Component {
  componentDidMount = () => {
    fetchHouse()
      .then(res => {
        const { getHouse } = this.props;
        getHouse(res.data);
      })
      .catch(err => err);
  }

  renderHelper = () => {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }
    let res = null;
    const { houses } = this.props;
    if (houses.length > 0) {
      res = houses.map(house => (<HouseCard key={house.id} house={house} />));
    } else {
      res = (
        <img className="loader-img" src={loader} alt="loading..." />
      );
    }

    return res;
  };

  render() {
    return (
      <>
        <h1 className="favi">Houses</h1>
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

Dashboard.defaultProps = {
  houses: PropTypes.shape({
    id: '',
    name: '',
    price: '',
    description: '',
    photo: '',
  }),
};

Dashboard.propTypes = {
  houses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  getHouse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
