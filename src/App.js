import React from 'react';
import Home from './pages/Home';
import PlanetsProvider from './context/PlanetsProvider';
import Header from './components/Header';
import './styles/App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PlanetsProvider>
        <Home />
      </PlanetsProvider>
      <Footer />
    </div>
  );
}

export default App;
