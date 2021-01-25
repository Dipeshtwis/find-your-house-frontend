import React, { useState } from 'react';
import axios from 'axios';
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
        props.handleSuccessfulAuth(res.data);
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

export default Login;