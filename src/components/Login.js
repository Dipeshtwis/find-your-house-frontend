import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_ID, API_LOGIN } from '../api/railshouse';

const Login = props => {
  const [state, setState] = useState({
    email: '',
    password: '',
    loginErrors: ''
  });

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
        props.UserToken(res.data.logged_in);
      }
    })
    .catch(err => {
      console.log("login error", err);
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>

      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  UserToken: data => {
    dispatch(UserToken(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);