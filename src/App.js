import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";

//Components
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
       <Nav />
      <Routes>
        <Route path="/" element={<Landing /> } />
        <Route path='/projects' element={<Projects/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      { <Footer /> }
    </div>
  );
}

export default App;
