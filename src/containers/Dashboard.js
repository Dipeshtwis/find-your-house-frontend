import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_ID, API_LOGOUT, API_HOUSE } from '../api/railshouse';
import { getHouseAction } from '../actions/index';

const Dashboard = props => {
  const { loggedInStatus, handleLogout, getHouse } = props;
  const [houses, SetHouses] = useState([]);

  useEffect(() => {
    axios.get(`${API_ID}${API_HOUSE}`)
    .then(res => {
      getHouse(res.data);
    })
    .catch(err => {
      console.log("house fetching error", err);
    });
  }, [houses.length, getHouse])

  const handleLogoutClick = () => {
  	axios.delete(`${API_ID}${API_LOGOUT}`, {
  	  withCredentials: true
  	})
  	.then(res => {
  	  handleLogout();
  	  props.history.push("/");
  	})
  	.catch(err => {
  	  console.log("logout error", err);
  	});
    
  }

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => handleLogoutClick()}>Logout</button>
        <h2>Status: {loggedInStatus}</h2>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  house: state.house,
});

const mapDispatchToProps = dispatch => ({
  getHouse: data => dispatch(getHouseAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
