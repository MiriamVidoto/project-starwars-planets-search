import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanets from '../services/planetsApi';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const requestPlanets = async () => {
    const result = await getPlanets();
    const newPlanets = result.map((planet) => delete planet.residents);
    console.log(newPlanets);
    setPlanets(result);
  };

  useEffect(() => {
    requestPlanets();
  }, []);

  return (
    <planetsContext.Provider value={ { planets } }>
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
