/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import login from '../../components/Login';

it('renders login component correctly', () => {
  const login = renderer.create(<login />).toJSON();
  expect(login).toMatchSnapshot();
});
