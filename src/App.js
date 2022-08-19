import React from 'react';
import Home from './pages/Home';
import './styles/App.css';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <div className="App">
      <PlanetsProvider>
        <Home />
      </PlanetsProvider>
    </div>
  );
}

export default App;
