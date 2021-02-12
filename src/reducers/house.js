import { HOUSE } from '../actions/index';

const houseReducer = (state = [], action) => {
  switch (action.type) {
    case HOUSE:
      return action.payload;
    default:
      return state;
  }
};

export default houseReducer;
