import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getHouseDetail } from '../actions/index';
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
    if(house_detail) {
      const house = house_detail;
      return (
      	<div className="house-detail">
          <div>
            <img className="img" src={house.photo} alt={house.name} />
            <h2 className="house-price">
              {' '}
              {house.price}
              {' '}
              $
              <br />
              per Day
              {' '}
            </h2>
          </div>
          <div className="house-desc">
            <h2>
              {' '}
              {house.name}
              {' '}
            </h2>

            <p className="desc">
              {house.description}
              {' '}
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <>
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