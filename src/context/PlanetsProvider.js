import PropTypes from 'prop-types';
import React, { useState } from 'react';
import getPlanets from '../services/planetsApi';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  const requestPlanets = async () => {
    setLoading(true);
    const result = await getPlanets();
    const newPlanets = result.map((planet) => {
      delete planet.residents;
      return planet;
    });
    setPlanets(newPlanets);
    setFilteredPlanets(newPlanets);
    setLoading(false);
  };

  const handleChangeName = ({ target }) => {
    setFilterByName({ name: target.value });
    const planetsFilter = planets
      .filter((planet) => (
        planet.name.toLowerCase().includes(filterByName.name.toLowerCase())));
    setFilteredPlanets(planetsFilter);
  };

  const INITIAL_STATE = { loading,
    requestPlanets,
    filteredPlanets,
    filterByName,
    handleChangeName };

  return (
    <planetsContext.Provider value={ INITIAL_STATE }>
      { children }
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetsProvider;
