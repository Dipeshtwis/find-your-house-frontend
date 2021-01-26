import React, { useCallBback, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getHouseDetail } from '../actions/index';
import { API_ID, API_HOUSE } from '../api/railshouse';

const HouseDetails = props => {
  const { id, house_detail, getHouseDetail } = props
  
  const fetchHouseDetail = useCallBback(() => {
    axios.get(`${API_ID}${API_HOUSE}/${id}`)((props.match.params.id))
    .then(res => {
      getHouseDetail(res.data);
    })
    .catch(err => {
      console.log("house detail fetching error", err);
    });
  }, [getHouseDetail]);

  useEffect(() => {
    fetchHouseDetail();
  }, [fetchHouseDetail]);

  const renderHelper = () => {
    if(house_detail) {
      const house = house_detail;
      return (
      	<div>
          <div className="imgcont">
            <img className="detimage" src={house.photo} alt={house.name} />
            <h2 className="detprice">
              {' '}
              {house.price}
              {' '}
              $
              <br />
              per Day
              {' '}
            </h2>
          </div>
          <div className="det">
            <h2 className="detname">
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
    <div className="house-detail">
      {renderHelper()}
    </div>
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