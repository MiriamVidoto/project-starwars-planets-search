import React from 'react';
import '../styles/Filters.css';

function Filters() {
  const columnFiltersOptions = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const comparisonFilterOptions = ['maior que', 'menor que', 'igual a '];

  return (
    <div className="filters">
      <label htmlFor="column-filter">
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
        >
          {
            columnFiltersOptions
              .map((option) => <option key={ option }>{ option }</option>)
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
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
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
      >
        Filter
      </button>
    </div>
  );
}

export default Filters;
