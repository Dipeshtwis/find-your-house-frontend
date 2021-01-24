import React, { Component } from 'react';
import Registration from '../components/Registration';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <h1>Home</h1>
        <h2>Status: {this.props.loggedInStatus}</h2>
        <Registration />
      </>
    );
  }
}
