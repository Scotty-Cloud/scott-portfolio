import './App.css';
import Home from './Components/Home/Home'
import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
