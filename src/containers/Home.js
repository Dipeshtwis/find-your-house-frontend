import React from 'react';
import Registration from '../components/Registration';
import Login from '../components/Login';

const Home = props => {
  const { handleLogin, loggedInStatus } = props;

  const handleSuccessfulAuth = data => {
  	handleLogin(data);
    props.history.push("/dashboard");
  }
  
  return (
    <>
      <h1>Home</h1>
      <h2>Status: {loggedInStatus}</h2>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </>
  );
}

export default Home;
