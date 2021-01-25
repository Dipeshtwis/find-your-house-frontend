import { combineReducers } from 'redux';
import houseReducer from './house';

const rootReducer = combineReducers({
  house: houseReducer,
});