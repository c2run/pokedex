import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/pokemons/:name" element={<Pokemon />} />
      <Route path="/pokemon" element={<Pokemons />} />
      <Route path="/items" element={<Items />} />
      <Route path="/" element={<Pokemons />} />
    </Routes>

    
  );
}

export default App;
