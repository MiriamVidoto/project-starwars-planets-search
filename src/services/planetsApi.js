const getPlanets = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(URL);
  const result = await response.json();
  return result.results;
};

export default getPlanets;
