import React, { useEffect, useContext } from 'react';
import Filters from '../components/Filters';
import Loading from '../components/Loading';
import Search from '../components/Search';
import Table from '../components/Table';
import planetsContext from '../context/planetsContext';

function Home() {
  const { loading, requestPlanets } = useContext(planetsContext);

  useEffect(() => {
    requestPlanets();
  }, []);

  if (loading) {
    return (<Loading />);
  }
  return (
    <div>
      <Search />
      <Filters />
      <Table />
    </div>
  );
}

export default Home;
