import React, { useState, useEffect } from 'react';
import './App.css';
import AlunosList from './components/AlunosList';

function App() {
  return (
    <div className="App">
      <h1>Lista de Alunos</h1>
      <AlunosList />
    </div>
  );
}

export default App;

