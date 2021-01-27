import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getUserToken } from '../actions/index';
import '../assets/stylesheet/registration.css';
import { API_ID, API_REGISTRATION } from '../api/railshouse';

const Registration = props => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: ''
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
          name="password_confirmation"
          placeholder="Password_confirmation"
          className="input-cl"
          value={state.password_confirmation}
          onChange={handleChange}
          required
        />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);