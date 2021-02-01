import { getHouseAction, getHouseDetail, getUserToken, getError } from '../../actions/index';
import { HOUSE, HOUSEDETAIL, USERTOKEN, ERROR } from '../../actions/index';

describe('actions', () => {
  it('should get all the house data', () => {
    const data = [{ name: 'wierd house' }];
    const expectedAction = {
      type: HOUSE,
      payload: data,
    };
    expect(getHouseAction(data)).toEqual(expectedAction);
  });
});

it('should get particular house details', () => {
  const data = [{ name: 'onefamilydown' }];
  const expectedAction = {
    type: HOUSEDETAIL,
    payload: data,
  };
  expect(getHouseDetail(data)).toEqual(expectedAction);
});

it('should get user token', () => {
  const data = { token: 'thisisauserToken' };
  const expectedAction = {
    type: USERTOKEN,
    payload: data,
  };
  expect(getUserToken(data)).toEqual(expectedAction);
});

it('should get get error', () => {
  const data = { error: 'wrong credentials' };
  const expectedAction = {
    type: ERROR,
    payload: data,
  };
  expect(getError(data)).toEqual(expectedAction);
});
