import { combineReducers, createStore } from 'redux';
import houseReducer from './house';

const rootReducer = combineReducers({
  house: houseReducer,
});

const store = createStore(rootReducer);

export default store;