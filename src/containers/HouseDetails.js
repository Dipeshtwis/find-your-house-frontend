import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getHouseDetail } from '../actions/index';
import '../assets/stylesheet/housedetails.css'
import { API_ID, API_HOUSE } from '../api/railshouse';

const HouseDetails = props => {
  const { house_detail, getHouseDetail } = props
  
  const fetchHouseDetail = useCallback(() => {
    axios.get(`${API_ID}${API_HOUSE}/${props.match.params.id}`)
    .then(res => {
      getHouseDetail(res.data);
    })
    .catch(err => {
      console.log("house detail fetching error", err);
    });
  }, [getHouseDetail, props.match.params.id]);

  useEffect(() => {
    fetchHouseDetail();
  }, [fetchHouseDetail]);

  const renderHelper = () => {
  	if (!localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }

    if(house_detail) {
      const house = house_detail;
      return (
      	<div className="house-detail">
          <div>
            <img className="img" src={house.photo} alt={house.name} />
          </div>
          <div className="detail-header">
            <div>
              <h3>{house.location}</h3>
            </div>
            <div>
              <h3 className="house-price">
                {' '}
                {house.price}
                {' '}
                $
                <br />
                per Month
                {' '}
              </h3>
            </div>
            
          </div>
          <div className="house-desc">
            <h3>About This House</h3>
            <p className="desc">
              {house.description}
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="link">
          <Link to="/dashboard"> &#8617;</Link>
        </div>
        <div className="house-header">
          <h2>{house_detail.name}</h2>
        </div>
      </div>
      
      {renderHelper()}
    </>
  );
};

const mapStateToProps = state => ({
  house_detail: state.house_detail,
});

const mapDispatchToProps = dispatch => ({
  getHouseDetail: data => {
    dispatch(getHouseDetail(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);