import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/stylesheet/house.css';

const HouseCard = ({ house }) => {
  return (
    <div data-testid={house.id} className="card">
      <div>
        <img className="house-img" src={house.photo} alt={house.name} />
      </div>
      <div>
        <p>{house.name}<span className="house-price">{house.price}$/month</span></p>
      </div>
      <div className="linker">
        <p><Link to={`/dashboard/${house.id}/${house.name}`}>Check Details</Link></p>
      </div>
      <div className="fav linker">
        <p><Link to={`/favourite`}>Add to favourite</Link></p>
      </div>
    </div>
  );
};

export default HouseCard;