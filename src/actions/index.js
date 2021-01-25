export const HOUSE = 'HOUSE';
export const HOUSEDETAIL = 'HOUSEDETAIL';

export const getHouseAction = data => ({
  type: HOUSE,
  payload: data,
});

export const getHouseDetail = detail => ({
  type: HOUSEDETAIL,
  payload: detail,
});
