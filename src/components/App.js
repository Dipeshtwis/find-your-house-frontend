import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from '../containers/Home';
import Dashboard from '../containers/Dashboard';
import HouseDetails from '../containers/HouseDetails';
import { API_ID, API_LOGIN_STATUS } from '../api/railshouse';

const App = props => {
  const [state, setState] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  });

  const checkLoginStatus = useCallback(() => {
    axios.get(`${API_ID}${API_LOGIN_STATUS}`, {
      withCredentials: true
    })
    .then(res => {
      if(res.data.logged_in && state.loggedInStatus === "NOT_LOGGED_IN") {
        setState({
          loggedInStatus: "LOGGED_IN",
          user: res.data.user
        })
      }
      else if (!res.data.logged_in && state.loggedInStatus === "LOGGED_IN") {
        setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    })
    .catch(err => {
      console.log("check login error", err);
    });
  });

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  const handleLogout = () => {
    setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  const handleLogin = data => {
    setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact 
            path={"/"}
            render={props => (
              <Home {...props} handleLogin={handleLogin} loggedInStatus={state.loggedInStatus} />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={props => (
              <Dashboard {...props} handleLogout={handleLogout} loggedInStatus={state.loggedInStatus} />
            )}
          />
          <Route
            exact
            path={"/dashboard/:id/:name"}
            component={HouseDetails}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


