import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Dashboard from '../containers/Dashboard';
import HouseDetails from '../containers/HouseDetails';
import Login from './Login';
import { getError } from '../actions/index';
import Error from './Error';
import Registration from './Registration';
import Favourite from '../containers/Favourite';
import Navbar from './Navbar';

const App = ({ getError, error }) => {
  const renderErrors = () => {// eslint-disable-line
    if (error && error !== null) {
      setTimeout(() => { getError(null); }, 2500);
      return <Error key={1} msg={error} />;
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="err-cont">
          {renderErrors()}
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/:id/:name" component={HouseDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Registration} />
          <Route exact path="/favourite" component={Favourite} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  getError: error => dispatch(getError(error)),
});

App.propTypes = {
  error: PropTypes.string.isRequired,
  getError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
