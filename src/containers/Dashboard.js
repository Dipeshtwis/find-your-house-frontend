import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getUserToken, getHouseAction } from '../actions/index';
import {
  API_ID, API_HOUSE,
} from '../api/railshouse';
import loader from '../assets/img/loader.gif';
import HouseCard from '../components/HouseCard';
import '../assets/stylesheet/house.css';

const Dashboard = props => {
  const { getHouse, houses, getUserToken } = props;

  const fetchHouse = useCallback(() => {
    axios.get(`${API_ID}${API_HOUSE}`)
      .then(res => {
        getHouse(res.data);
      })
      .catch(err => err);
  }, [getHouse]);

  useEffect(() => {
    fetchHouse();
  }, [fetchHouse]);

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    getUserToken('');
  };

  const renderHelper = () => {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }
    let res = null;
    if (houses.length > 0) {
      res = houses.map(house => (<HouseCard key={house.id} house={house} />));
    } else {
      res = (
        <img src={loader} alt="loading..." />
      );
    }

    return res;
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>Houses</h1>
        </div>
        <div className="list">
          <Link to="/favourite" className="btn"> Go to Favourite</Link>
          <button type="button" className="btn" onClick={() => handleLogoutClick()}>Logout</button>
        </div>
      </div>
      <div className="house">
        {renderHelper()}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  houses: state.houses,
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  getHouse: data => dispatch(getHouseAction(data)),
  getUserToken: data => dispatch(getUserToken(data)),
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
  getUserToken: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
