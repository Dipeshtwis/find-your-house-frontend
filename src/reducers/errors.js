import { ERROR } from '../actions/index';

const errorReducer = (state = '', action) => {
  switch (action.type) {
    case ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
