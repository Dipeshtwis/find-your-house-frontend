import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { getHouseAction } from '../actions/index';
import HouseCard from '../components/HouseCard';
import { API_ID, API_FAVOURITE } from '../api/railshouse';

const Favourite = props => {
  const { houses, getHouse } = props;

  const fetchFavourite = useCallback(() => {
  	axios.get(`${API_ID}${API_FAVOURITE}`,
    {withCredentials: true}
    )
    .then(res => {
      const uniq = [...new Set(res.data.map(x => x.id))].map(
          id => res.data.find(s => s.id === id),
        );
        getHouse(uniq);
    })
    .catch(err => {
      console.log("getting favourite error", err);
    });
  }, [getHouse]);

  useEffect(() => {
    fetchFavourite();
  }, [fetchFavourite]);

  const renderHelper = () => {
    if (!localStorage.getItem('usr')) {
      return <Redirect to ="/dashboard" />
    }
    let res = null;
    if (houses.length > 0) {
      res = houses.map(house => (<HouseCard key={house.id} alreadyFav house={house} />));
    } else {
      res = (
        <p className="para-fav">You have no favourite House</p>
      );
    }

    return res;
  };

  return (
  	<>
  	  <div className="navbar">
        <div className="logo">
          <h1>Favourites</h1>
        </div>
        <div className="list desc">
          <Link to="/dashboard" className="btn"> Go to Houses</Link>
        </div>
      </div>
      <div className="house">
        {renderHelper()}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  houses: state.houses,
});

const mapDispatchToProps = dispatch => ({
  getHouse: data => dispatch(getHouseAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);