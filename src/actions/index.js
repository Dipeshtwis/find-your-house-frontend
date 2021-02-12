export const HOUSE = 'HOUSE';
export const HOUSEDETAIL = 'HOUSEDETAIL';
export const USERTOKEN = 'USERTOKEN';
export const ERROR = 'ERROR';
export const FAV = 'FAV';

export const getHouseAction = data => ({
  type: HOUSE,
  payload: data,
});

export const getHouseDetail = detail => ({
  type: HOUSEDETAIL,
  payload: detail,
});

export const getUserToken = token => ({
  type: USERTOKEN,
  payload: token,
});

export const getError = error => ({
  type: ERROR,
  payload: error,
});

export const getFavAction = data => ({
  type: FAV,
  payload: data,
});
