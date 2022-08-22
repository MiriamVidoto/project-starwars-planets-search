import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import planetsMock from './planetsMock';
import App from '../App'

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(planetsMock)
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Teste do componente Home',  () => {
  test('Se a Api é chamada', () =>{
    render(<App />);
    
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(endpoint);
  })
  test('Se é possível filtrar planetas por nome ', async () => {
    render(<App />);
    await waitFor(() => expect(fetch).toHaveBeenCalled())
    const filterName = screen.getByTestId('name-filter')
    userEvent.type(filterName, 'oo')
    expect(await screen.findAllByRole('row')).toHaveLength(3)
  })
  test('Se é possível filtrar planetas por valores com a comparação "maior que"', async () => {
    render(<App />)
    await waitFor(() => expect(fetch).toHaveBeenCalled())
    const columFilter = screen.getByTestId('column-filter')
    userEvent.selectOptions(columFilter, ['population'])
    const comparisonFilter = screen.getByTestId('comparison-filter')
    userEvent.selectOptions(comparisonFilter, ['maior que'])
    const valueFilter = screen.getByTestId('value-filter')
    userEvent.type(valueFilter,'1000')
    const buttonFilter = screen.getByTestId('button-filter')
    userEvent.click(buttonFilter)
    expect(await screen.findAllByRole('row')).toHaveLength(8)
  })
  test('Se é possível filtrar planetas por valores com a comparação "menor que"', async () => {
    render(<App />)
    await waitFor(() => expect(fetch).toHaveBeenCalled())
    const columFilter = screen.getByTestId('column-filter')
    userEvent.selectOptions(columFilter, ['rotation_period'])
    const comparisonFilter = screen.getByTestId('comparison-filter')
    userEvent.selectOptions(comparisonFilter, ['menor que'])
    const valueFilter = screen.getByTestId('value-filter')
    userEvent.type(valueFilter,'24')
    const buttonFilter = screen.getByTestId('button-filter')
    userEvent.click(buttonFilter)
    expect(await screen.findAllByRole('row')).toHaveLength(6)
  })
  test('Se é possível filtrar planetas por valores com a comparação "igual a"' , async () => {
    render(<App />)
    await waitFor(() => expect(fetch).toHaveBeenCalled())
    const columFilter = screen.getByTestId('column-filter')
    userEvent.selectOptions(columFilter, ['surface_water'])
    const comparisonFilter = screen.getByTestId('comparison-filter')
    userEvent.selectOptions(comparisonFilter, ['igual a'])
    const valueFilter = screen.getByTestId('value-filter')
    userEvent.type(valueFilter,'8')
    const buttonFilter = screen.getByTestId('button-filter')
    userEvent.click(buttonFilter)
    expect(await screen.findAllByRole('row')).toHaveLength(4)
  })
})
