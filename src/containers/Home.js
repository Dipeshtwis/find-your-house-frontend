import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Home = props => {
  if (localStorage.getItem('token')) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <div className ="navbar">
        <div className="logo">
          <h1>Home</h1>
        </div>
        <div className="list">
          <ul className="navbar-list">
            <li className="link-btn"><Link to="/signup"> SIGN UP</Link></li>
            <li className="link-btn"><Link to="/login"> LOGIN</Link></li>
          </ul>
        </div>
      </div>
      <h3 className="tagline">Find Housing Anywhere</h3>
      <p className="explore"><Link to="/signup">Explore Developer<span>&#8594;</span></Link></p>
    </div>
  );
}

export default Home;
