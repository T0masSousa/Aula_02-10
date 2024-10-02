import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/home';

test('Componente Renderizado?', () => {
  render(<Home />);
  const headingElement = screen.getByText("Home Render");
  expect(headingElement).toBeInTheDocument();

  
  //VERIFICAR SE O PARÁGRAFO ESTá LÁ
  const paragraphElement = screen.getByText('Welcome to the homepage!');
  expect(paragraphElement).toBeInTheDocument();
});