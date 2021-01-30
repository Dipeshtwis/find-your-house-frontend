import { HOUSEDETAIL } from '../actions/index';

const houseDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case HOUSEDETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default houseDetailReducer;
