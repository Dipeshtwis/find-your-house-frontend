import React from 'react';
import renderer from 'react-test-renderer';
import housecard from '../../components/HouseCard';

it('renders housecard component correctly', () => {
  const housecard = renderer.create(<housecard />).toJSON();
  expect(housecard).toMatchSnapshot();
});