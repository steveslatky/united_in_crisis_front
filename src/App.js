import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from "./components/Menubar/Menubar";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Menubar />
      <About />
    </div>
  );
}

export default App;
