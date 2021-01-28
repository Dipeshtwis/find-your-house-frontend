import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loader from '../assets/img/loader.gif';
import { getHouseAction } from '../actions/index';
import HouseCard from '../components/HouseCard';

const Favourite = props => {
  const { houses } = props;
  const renderHelper = () => {
    if (!localStorage.getItem('usr')) {
      return <Redirect to ="/dashboard" />
    }
    let res = null;
    if (houses.length > 0) {
      res = houses.map(house => (<HouseCard key={house.id} house={house} />));
    } else {
      res = (
        <img src={loader} alt="loading..." />
      );
    }

    return res;
  };

  return (
    <div className="house">
      {renderHelper()}
    </div>
  );
}

const mapStateToProps = state => ({
  houses: state.houses,
});

const mapDispatchToProps = dispatch => ({
  getHouse: data => dispatch(getHouseAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);