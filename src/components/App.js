import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Dashboard from '../containers/Dashboard';
import HouseDetails from '../containers/HouseDetails';
import Login from './Login';
import { API_ID, API_LOGIN_STATUS } from '../api/railshouse';

const App = props => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard/:id/:name" component={HouseDetails} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


