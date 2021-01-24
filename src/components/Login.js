import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios.post("http://localhost:3001/sessions", {
      user: {
        email: email,
        password: password
      }
    },
    { withCredentials: true }
    )
    .then(res => {
      console.log("res from login", res);
      // if (res.data.status === 'created') {
      //   this.props.handleSuccessfulAuth(res.data);
      // }
    })
    .catch(err => {
      console.log("login error", err);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>

        </form>
      </div>
    );
  }
}