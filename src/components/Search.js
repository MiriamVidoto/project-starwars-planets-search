import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';
import '../styles/Search.css';

function Search() {
  const { filterByName, setFilterByName } = useContext(planetsContext);

  return (
    <div className="search">
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          id="search"
          data-testid="name-filter"
          placeholder="Filter By Name"
          value={ filterByName.name }
          onChange={ ({ target }) => setFilterByName({ name: target.value }) }
        />
      </label>
    </div>
  );
}

export default Search;
