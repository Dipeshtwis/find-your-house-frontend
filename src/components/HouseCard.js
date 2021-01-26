import React from 'react';
import { Link } from 'react-router-dom';

const HouseCard = ({ house }) => {
  return (
    <div data-testid={house.id} className="card">
      <img src={house.photo} alt={house.name} />
      <Link to={`/dashboard/${house.id}/${house.name}`}>
        <div className="content">
          <p>
            {' '}
            {house.name}
            {' '}
          </p>

          <p className="price">
            {' '}
            {house.price}
            {' '}
            $/day
            {' '}
          </p>

        </div>
      </Link>
    </div>
  );
};

export default HouseCard;