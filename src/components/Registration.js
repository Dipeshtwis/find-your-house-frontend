import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserToken } from '../actions/index';
import { API_ID, API_REGISTRATION } from '../api/railshouse';

const Registration = props => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const {
      username,
      email,
      password,
      password_confirmation
    } = state;

  const handleSubmit = event => {
    axios.post(`${API_ID}${API_REGISTRATION}`, {
      user: {
        username: username,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    },
    { withCredentials: true }
    )
    .then(res => {
      if (res.data.logged_in) {
        localStorage.setItem('token', res.data.logged_in);
        props.getUserToken(res.data.logged_in);
      }
    })
    .catch(err => {
      console.log("registration error", err);
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={state.username}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Password_confirmation"
          value={state.password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

      </form>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);