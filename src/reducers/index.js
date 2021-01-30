import { combineReducers, createStore } from 'redux';
import houseReducer from './house';
import houseDetailReducer from './houseDetails';
import userReducer from './userDetail';

const rootReducer = combineReducers({
  houses: houseReducer,
  houseDetail: houseDetailReducer,
  token: userReducer,
});

const store = createStore(rootReducer);

export default store;
