import React from 'react';
import Filters from '../components/Filters';
import Search from '../components/Search';
import Table from '../components/Table';

function Home() {
  return (
    <div>
      <Search />
      <Filters />
      <Table />
    </div>
  );
}

export default Home;
