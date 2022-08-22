import React, { useEffect, useContext } from 'react';
import planetsContext from '../context/planetsContext';
import '../styles/Table.css';
import Loading from './Loading';

function Table() {
  const { loading,
    requestPlanets,
    planets,
    filterByName,
    filterByNumericValues } = useContext(planetsContext);

  const titles = planets.length > 0
    ? Object.keys(planets[0])
    : [];

  const planetsFiltered = planets
    .filter((planet) => planet.name.toLowerCase()
      .includes(filterByName.name.toLowerCase()))
    .filter((planet) => filterByNumericValues.every((filter) => {
      if (filter.comparison === 'maior que') {
        return +planet[filter.column] > +filter.value;
      }
      if (filter.comparison === 'menor que') {
        return +planet[filter.column] < +filter.value;
      }
      return +planet[filter.column] === +filter.value;
    }));

  useEffect(() => {
    requestPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (<Loading />);
  }

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            { titles.map((title) => <th key={ title }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {
            planetsFiltered
              .map((planet) => (
                <tr key={ planet.name }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter}</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created}</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
