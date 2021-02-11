import { FAV } from '../actions/index';

const favReducer = (state = [], action) => {
  switch (action.type) {
    case FAV:
      return action.payload;
    default:
      return state;
  }
};

export default favReducer;
