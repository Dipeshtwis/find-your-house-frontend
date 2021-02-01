import React from 'react';
import renderer from 'react-test-renderer';
import registration from '../../components/Registration';

it('renders registration component correctly', () => {
  const registration = renderer.create(<registration />).toJSON();
  expect(registration).toMatchSnapshot();
});