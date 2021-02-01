import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import HouseCard from '../components/HouseCard';

afterEach(cleanup);

it('render name', () => {
  const house = {
    id: 1,
    name: 'one family down',
    price: 9000,
    photo: 'randompic',
    description: 'This is a house description',
  };
  const { getByTestId } = render(
    <BrowserRouter>
      <HouseCard key={house.id} house={house} />
    </BrowserRouter>
    ,
  );
  expect(getByTestId('1')).toHaveTextContent('one family down');
});

it('render price', () => {
  const house = {
    id: 1,
    name: 'one family down',
    price: 9000,
    photo: 'randompic',
    description: 'This is a house description',
  };
  const { getByTestId } = render(
    <BrowserRouter>
      <HouseCard key={house.id} house={house} />
    </BrowserRouter>
    ,
  );
  expect(getByTestId('1')).toHaveTextContent('9000');
});
