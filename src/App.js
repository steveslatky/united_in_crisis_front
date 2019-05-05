import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from "./components/Menubar/Menubar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Chat />
    </div>
  );
}

export default App;
