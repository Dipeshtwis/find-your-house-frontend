import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getHouseAction } from '../actions/index';
import {
  API_ID, API_HOUSE,
} from '../api/railshouse';
import loader from '../assets/img/loader.gif';
import HouseCard from '../components/HouseCard';
import '../assets/stylesheet/house.css';

const Dashboard = props => {
  const { getHouse, houses } = props;

  const fetchHouse = useCallback(() => {
    axios.get(`${API_ID}${API_HOUSE}`)
      .then(res => {
        getHouse(res.data);
      })
      .catch(err => err);
  }, [getHouse]);

  useEffect(() => {
    fetchHouse();
  }, [fetchHouse]);

  const renderHelper = () => {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }
    let res = null;
    if (houses.length > 0) {
      res = houses.map(house => (<HouseCard key={house.id} house={house} />));
    } else {
      res = (
        <img className="loader-img" src={loader} alt="loading..." />
      );
    }

    return res;
  };

  return (
    <>
      <div className="house">
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
});

Dashboard.defaultProps = {
  houses: PropTypes.shape({
    id: '',
    name: '',
    price: '',
    description: '',
    photo: '',
  }),
};

Dashboard.propTypes = {
  houses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  getHouse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
