import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserToken } from '../actions/index';
import '../assets/stylesheet/nav.css';

const Navbar = props => {
  const { getUserToken } = props;

  if (localStorage.getItem('token')) {
    getUserToken(localStorage.getItem('token'));
  }
  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    getUserToken('');
  };

  const close = () => {
    const nav = document.getElementById('navbar');
    nav.className = 'navbar';
    nav.classList.add('hide');
  };
  const show = () => {
    const nav = document.getElementById('navbar');
    nav.className = 'navbar';
    nav.classList.add('left');
  };

  return (
    <nav>
      <div className="nav">
        <div onClick={show} className="hamburger">{ // eslint-disable-line
          }
          <span />
          <span />
          <span className="last-bar" />
        </div>
      </div>
      <div id="navbar" className="navbar hide">
        <span onClick={close} className="close">X</span>{ // eslint-disable-line
          }
        <ul>
          <li>
            <Link onClick={close} to="/dashboard">
              Houses
            </Link>

          </li>
          <li>
            <Link onClick={close} to="/favourite">
              Favourites
            </Link>
          </li>
          <li className="handleLogoutClick" onClick={handleLogoutClick}><Link onClick={close} to="/">Sign out</Link> </li> { // eslint-disable-line
          }
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  getUserToken: data => dispatch(getUserToken(data)),
});

Navbar.propTypes = {
  getUserToken: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
