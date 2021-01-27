import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getUserToken } from '../actions/index';
import { API_ID, API_LOGIN } from '../api/railshouse';

const Login = props => {
  const [state, setState] = useState({
    email: '',
    password: '',
    loginErrors: ''
  });

  if (localStorage.getItem('token')) {
    return <Redirect to="/dashboard" />;
  }

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const { email, password } = state;

  const handleSubmit = event => {
    axios.post(`${API_ID}${API_LOGIN}`, {
      user: {
        email: email,
        password: password
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
      console.log("login error", err);
    });
    event.preventDefault();
  }

  return (
    <div>
      <h2 className="register-header">Member Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-cl"
          value={state.email}
          onChange={handleChange}
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

        <div className="div-btn">
          <button type="submit" className="form-btn">Login</button>
        </div>

      </form>
      <p className="text-link"><Link to="/signup"> Sign up</Link></p>
      <p className="text-link"><Link to="/"> Back To Home</Link></p>
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  getUserToken: data => {
    dispatch(getUserToken(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);