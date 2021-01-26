import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Home = props => {
  if (localStorage.getItem('token')) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <h1>Home</h1>
      <Link to="/signup"> Sign up </Link>
      <Link to="/login"> Login</Link>
    </>
  );
}

export default Home;
