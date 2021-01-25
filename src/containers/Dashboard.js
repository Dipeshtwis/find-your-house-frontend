import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ID, API_LOGOUT, API_HOUSE } from '../api/railshouse';

const Dashboard = props => {
  const { loggedInStatus, handleLogout } = props;
  const [houses, SetHouses] = useState([]);

  useEffect(() => {
    axios.get(`${API_ID}${API_HOUSE}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log("house fetching error", err);
    });
  }, [houses.length])

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

export default Dashboard;
