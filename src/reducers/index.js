import { combineReducers, createStore } from 'redux';
import houseReducer from './house';
import houseDetailReducer from './houseDetails';

const rootReducer = combineReducers({
  houses: houseReducer,
  house_detail: houseDetailReducer, 
});

const store = createStore(rootReducer);

export default store;