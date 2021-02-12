/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import registration from '../../components/Registration';

it('renders registration component correctly', () => {
  const registration = renderer.create(<registration />).toJSON();
  expect(registration).toMatchSnapshot();
});
