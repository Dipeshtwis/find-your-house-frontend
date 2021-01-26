export const HOUSE = 'HOUSE';
export const HOUSEDETAIL = 'HOUSEDETAIL';
export const USERTOKEN = 'USERTOKEN';

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
