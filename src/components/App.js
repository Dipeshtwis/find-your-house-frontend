import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Dashboard from '../containers/Dashboard';
import HouseDetails from '../containers/HouseDetails';
import Login from './Login';
import Registration from './Registration';
import Favourite from '../containers/Favourite';

const App = () => (
  <div className="App">
    <BrowserRouter>
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

export default App;
