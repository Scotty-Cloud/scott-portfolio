import './App.css';
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
