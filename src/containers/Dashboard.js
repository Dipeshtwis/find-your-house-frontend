import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { API_ID, API_LOGOUT, API_HOUSE } from '../api/railshouse';
import { getHouseAction } from '../actions/index';
import loader from '../assets/img/loader.gif';
import HouseCard from '../components/HouseCard';

const Dashboard = props => {
  const { loggedInStatus, handleLogout, getHouse, houses } = props;

  const fetchHouse = useCallback(() => {
    axios.get(`${API_ID}${API_HOUSE}`)
    .then(res => {
      getHouse(res.data);
    })
    .catch(err => {
      console.log("house fetching error", err);
    });
  }, [getHouse]);

  useEffect(() => {
    fetchHouse();
  }, [fetchHouse]);

  const handleLogoutClick = () => {
  	axios.delete(`${API_ID}${API_LOGOUT}`, {
  	  withCredentials: true
  	})
  	.then(res => {
  	  handleLogout();
  	  props.history.push("/");
  	})
  	.catch(err => {
  	  console.log("logout error", err);
  	});
  }

  const renderHelper = () => {
      if (loggedInStatus === 'NOT_LOGGED_IN') {
        return <Redirect to="/" />;
      }

      let res = null;
      if (houses.length > 0) {
        res = houses.map(house => (<HouseCard key={house.id} house={house} />));
      } else {
        res = (
          <img src={loader} alt="loading..." />
        );
      }

      return res;
    }

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => handleLogoutClick()}>Logout</button>
        <h2>Status: {loggedInStatus}</h2>
      </div>
      <div className="House">
        {renderHelper()}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  houses: state.houses,
});

const mapDispatchToProps = dispatch => ({
  getHouse: data => dispatch(getHouseAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
