import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { getUserToken } from '../actions/index';
import { API_ID, API_LOGOUT, API_HOUSE, API_LOGIN_STATUS } from '../api/railshouse';
import { getHouseAction } from '../actions/index';
import loader from '../assets/img/loader.gif';
import HouseCard from '../components/HouseCard';
import '../assets/stylesheet/house.css';

const Dashboard = props => {
  const { getHouse, houses, getUserToken } = props;

  const checkLoginStatus = useCallback(() => {
    axios.get(`${API_ID}${API_LOGIN_STATUS}`, {
      withCredentials: true
    })
    .then(res => {
      localStorage.setItem('usr', res.data.user.id);
    })
    .catch(err => {
      console.log("check login error", err);
    });
  });

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  const fetchHouse = useCallback(() => {
    axios.get(`${API_ID}${API_HOUSE}`)
    .then(res => {
      getHouse(res.data);
    })
    .catch(err => {
      console.log("house fetching error", err);
    });
  }, [getHouse]);

  useEffect(() => {
    fetchHouse();
  }, [fetchHouse]);

  const handleLogoutClick = () => {
  	axios.delete(`${API_ID}${API_LOGOUT}`, {
  	  withCredentials: true
  	})
  	.then(res => {
  	  localStorage.removeItem('token');
      getUserToken('');
  	})
  	.catch(err => {
  	  console.log("logout error", err);
  	});
  }

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
    }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>Houses</h1>
        </div>
        <div className="list">
          <Link to="/favourite" className="btn"> Go to Favourite</Link>
          <button className="btn" onClick={() => handleLogoutClick()}>Logout</button>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
