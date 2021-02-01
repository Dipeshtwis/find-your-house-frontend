import React from 'react';
import renderer from 'react-test-renderer';
import error from '../../components/Error';

it('renders error component correctly', () => {
  const error = renderer.create(<error />).toJSON();
  expect(error).toMatchSnapshot();
});