import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { getUserToken, getError } from '../actions/index';
import '../assets/stylesheet/registration.css';
import { API_ID, API_REGISTRATION } from '../api/railshouse';

const Registration = props => {
  const { getUserToken, getError } = props;
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  if (localStorage.getItem('token')) {
    return <Redirect to="/dashboard" />;
  }

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const {
    username,
    email,
    password,
    passwordConfirmation,
  } = state;

  const handleSubmit = event => {
    const incpass = document.getElementById('incpass');
    if (password !== passwordConfirmation) {
      incpass.innerHTML = 'Password is not matching';
    } else {
      axios.post(`${API_ID}${API_REGISTRATION}`, {
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
      { withCredentials: true })
        .then(res => {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            getUserToken(res.data.token);
          } else {
            getError(res.data.error[0]);
          }
        })
        .catch(err => err);
    }
    event.preventDefault();
  };

  return (
    <div className="auth deauth">
      <h2 className="register-header">Member Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="input-cl"
          value={state.username}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-cl"
          value={state.email}
          onChange={handleChange}
          data-validate="Valid email is required: ex@abc.xyz"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-cl"
          value={state.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm your password"
          className="input-cl"
          value={state.password_confirmation}
          onChange={handleChange}
          required
        />
        <div className="incpass" id="incpass" />
        <div className="div-btn">
          <button type="submit" className="form-btn">Register</button>
        </div>

      </form>

      <p className="text-link"><Link to="/login"> Login</Link></p>
      <p className="text-link"><Link to="/"> Back To Home</Link></p>
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  getUserToken: data => {
    dispatch(getUserToken(data));
  },
  getError: error => dispatch(getError(error)),
});

Registration.propTypes = {
  getUserToken: PropTypes.func.isRequired,
  getError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
