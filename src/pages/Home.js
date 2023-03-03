import React from 'react';
import Filters from '../components/Filters';
import Search from '../components/Search';
import Table from '../components/Table';

function Home() {
  return (
    <main>
      <Search />
      <Filters />
      <Table />
    </main>
  );
}

export default Home;
