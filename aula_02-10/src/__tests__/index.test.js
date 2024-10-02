import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/index';

test('renderiza corretamente', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});