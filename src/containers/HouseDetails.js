import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getHouseDetail } from '../actions/index';
import '../assets/stylesheet/housedetails.css';
import handleFavoriteClick from '../utils/favouriteutil';
import { API_ID, API_HOUSE } from '../api/railshouse';

const HouseDetails = props => {
  const { houseDetail, getHouseDetail } = props;

  const fetchHouseDetail = useCallback(() => {
    axios.get(`${API_ID}${API_HOUSE}/${props.match.params.id}`)// eslint-disable-line
      .then(res => {
        getHouseDetail(res.data);
      })
      .catch(err => err);
  }, [getHouseDetail]);

  useEffect(() => {
    fetchHouseDetail();
  }, [fetchHouseDetail]);

  const renderHelper = () => {// eslint-disable-line
    if (!localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }

    if (houseDetail) {
      const house = houseDetail;
      return (
        <div className="house-detail">
          <div>
            <img className="img" src={house.photo} alt={house.name} />
          </div>
          <div className="detail-header">
            <div>
              <h3>{house.location}</h3>
            </div>
            <div className="price">
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
          <button
            className="btn last"
            type="button"
            onClick={() => {
              handleFavoriteClick(
                localStorage.getItem('usr'),
                house.id,
              );
            }}
          >
            Add to favourite
          </button>
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
          <h2 className="det">{houseDetail.name}</h2>
        </div>
      </div>

      {renderHelper()}
    </>
  );
};

const mapStateToProps = state => ({
  houseDetail: state.houseDetail,
});

const mapDispatchToProps = dispatch => ({
  getHouseDetail: data => {
    dispatch(getHouseDetail(data));
  },
});

HouseDetails.defaultProps = {
  houseDetail: PropTypes.shape({
    id: '',
    name: '',
    price: '',
    description: '',
    photo: '',
  }),
};

HouseDetails.propTypes = {
  getHouseDetail: PropTypes.func.isRequired,
  houseDetail: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    photo: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);
