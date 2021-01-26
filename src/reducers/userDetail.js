import { USERTOKEN } from '../actions/index';

const userReducer = (state = '', action) => {
  switch (action.type) {
    case USERTOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;