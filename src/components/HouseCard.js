import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleFavoriteClick } from '../utils/util';
import '../assets/stylesheet/house.css';

const HouseCard = props => {
  const { house, alreadyFav } = props;
  const favMe = () => {// eslint-disable-line
    if (!alreadyFav) {
      return (
        <button
          className="btn"
          type="button"
          onClick={() => {
            handleFavoriteClick(
              localStorage.getItem('token'),
              house.id,
            );
          }}
        >
          Add to Favorite
        </button>
      );
    }

    return (
      <button
        className="btn-success"
        type="button"
        onClick={() => {
          handleFavoriteClick(
            localStorage.getItem('token'),
            house.id,
          );
        }}
      >
        Added to Favorite
      </button>
    );
  };

  return (
    <div data-testid={house.id} className="card">
      <div>
        <img className="house-img" src={house.photo} alt={house.name} />
      </div>
      <div className="detail-header">
        <div>
          <p>{house.name}</p>
        </div>
        <div>
          <p>
            {house.price}
            $ / month
          </p>
        </div>
      </div>
      <div className="linker">
        <p><Link to={`/dashboard/${house.id}/${house.name}`}>Check Details</Link></p>
      </div>
      <div className="fav linker">
        {favMe()}
      </div>
    </div>
  );
};

HouseCard.defaultProps = {
  alreadyFav: false,
};

HouseCard.propTypes = {
  alreadyFav: PropTypes.bool,
  house: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

export default HouseCard;
