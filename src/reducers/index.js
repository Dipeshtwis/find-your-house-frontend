import { combineReducers, createStore } from 'redux';
import houseReducer from './house';
import houseDetailReducer from './houseDetails';
import userReducer from './userDetail';
import errorReducer from './errors';

const rootReducer = combineReducers({
  houses: houseReducer,
  houseDetail: houseDetailReducer,
  token: userReducer,
  error: errorReducer,
});

const store = createStore(rootReducer);

export default store;
