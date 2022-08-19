import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App'


describe('Teste do componente Home',  () => {
  test('Se na página existe l', () =>{
    render(<App />);
  })
})
