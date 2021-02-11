import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleFavoriteClick } from '../utils/util';
import '../assets/stylesheet/house.css';

const HouseCard = props => {
  const { house, favs } = props;
  const favMe = () => {// eslint-disable-line
    let fa = false;
    for (let i = 0; i < favs.length; i += 1) {
      if (favs[i].id === house.id) fa = true;
    }

    if (!fa) {
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

const mapStateToProps = state => ({
  favs: state.favs,
});

HouseCard.defaultProps = {
  favs: PropTypes.shape({
    id: '',
    name: '',
    price: '',
    description: '',
    photo: '',
  }),
};

HouseCard.propTypes = {
  house: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  favs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default connect(mapStateToProps, null)(HouseCard);
