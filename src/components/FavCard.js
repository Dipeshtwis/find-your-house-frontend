import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/stylesheet/house.css';

const FavCard = props => {
  const { fav } = props;

  return (
    <div data-testid={fav.id} className="card">
      <div>
        <img className="house-img" src={fav.photo} alt={fav.name} />
      </div>
      <div className="detail-header">
        <div>
          <p>{fav.name}</p>
        </div>
        <div>
          <p>
            {fav.price}
            $ / month
          </p>
        </div>
      </div>
      <div className="linker">
        <p><Link to={`/dashboard/${fav.id}/${fav.name}`}>Check Details</Link></p>
      </div>
    </div>
  );
};

FavCard.propTypes = {
  fav: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

export default FavCard;
