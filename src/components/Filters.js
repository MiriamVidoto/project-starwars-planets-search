import React, { useContext, useState, useEffect } from 'react';
import planetsContext from '../context/planetsContext';
import '../styles/Filters.css';

function Filters() {
  const { addNewFilter } = useContext(planetsContext);

  const [filterOptions, setFilterOptions] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [listFilters, setListFilters] = useState([]);

  const comparisonFilterOptions = ['maior que', 'menor que', 'igual a '];

  useEffect(() => { setColumn(filterOptions[0]); },
    [filterOptions]);

  const handleClickFilter = () => {
    const newFilter = { column, comparison, value };
    addNewFilter(newFilter);
    const newOptions = filterOptions.filter((option) => option !== column);
    setFilterOptions(newOptions);
    const newList = [...listFilters,
      `${column} ${comparison} ${value}`];
    setListFilters(newList);
  };

  return (
    <div className="filters">
      <label htmlFor="column-filter">
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          {
            filterOptions
              .map((option) => <option key={ option }>{ option }</option>)
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          {
            comparisonFilterOptions
              .map((option) => <option key={ option }>{ option }</option>)
          }
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          name="value-filter"
          id="value-filter"
          data-testid="value-filter"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
      >
        Filter
      </button>
      <div>
        <ul>
          {
            listFilters
              .map((filter) => (
                <li key={ filter }>{ filter }</li>))
          }
        </ul>
      </div>
    </div>
  );
}

export default Filters;
