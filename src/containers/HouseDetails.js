import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getHouseDetail } from '../actions/index';
import '../assets/stylesheet/housedetails.css';
import { handleFavoriteClick, fetchHouseDetail } from '../utils/util';

class HouseDetails extends Component {
  componentDidMount = () => {
    fetchHouseDetail(this.props.match.params.id) //eslint-disable-line
      .then(res => {
        const { getHouseDetail } = this.props;
        getHouseDetail(res.data);
      })
      .catch(err => err);
  }

  renderHelper = () => {// eslint-disable-line
    if (!localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }

    const { houseDetail } = this.props;
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
                localStorage.getItem('token'),
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

  render() {
    const { houseDetail } = this.props;
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

        {this.renderHelper()}
      </>
    );
  }
}

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
