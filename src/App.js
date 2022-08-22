import React from 'react';
import Home from './pages/Home';
import './styles/App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <PlanetsProvider>
        <Home />
      </PlanetsProvider>
    </div>
  );
}

export default App;
