import React from 'react';
import axios from 'axios';
import { API_ID, API_LOGOUT } from '../api/railshouse';

const Dashboard = props => {
  const { loggedInStatus, handleLogout } = props;
  
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
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => handleLogoutClick()}>Logout</button>
      <h2>Satatus: {loggedInStatus}</h2>
    </div>
  );
};

export default Dashboard;
