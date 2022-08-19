import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App'


describe('Teste do componente Home',  () => {
  test('Se a Api é chamada', () =>{
    render(<App />);
  })
  test('Se na página existe o input para filtrar por nome', () =>{
    render(<App />);
    expect(screen.getByTestId('input-gravatar-email')).toBeDefined();
  })
})
