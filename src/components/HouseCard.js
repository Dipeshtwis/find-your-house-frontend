import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_ID, API_FAVOURITE } from '../api/railshouse';
import '../assets/stylesheet/house.css';

const HouseCard = ({ house }) => {
  const handleFavoriteClick = (usr, houseId) => {
    axios.post(`${API_ID}${API_FAVOURITE}`, {
      user_id: usr,
      house_id: houseId,
    },
    { withCredentials: true}
    )
    .then(res => {
      console.log("Added succes", res);
    })
    .catch(err => {
      console.log("Add favourite error", err);
    })
  }

  const favMe = () => {
      return (
        <button
          className="btn"
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
      );
  };

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
        {favMe()}
      </div>
    </div>
  );
};

export default HouseCard;