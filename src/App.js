import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <PlanetsProvider>
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
