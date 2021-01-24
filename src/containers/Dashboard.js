import React from 'react';

const Dashboard = props => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Satatus: {props.loggedInStatus}</h2>
    </div>
  );
};

export default Dashboard;
