import { combineReducers, createStore } from 'redux';
import houseReducer from './house';
import houseDetailReducer from './houseDetails';
import userReducer from './userDetail';
import errorReducer from './errors';
import favReducer from './fav';

const rootReducer = combineReducers({
  houses: houseReducer,
  houseDetail: houseDetailReducer,
  token: userReducer,
  error: errorReducer,
  favs: favReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
