import './App.css';
import Navbar from './components/Navbar'
import AllWines from './pages/AllWines'

import axios from 'axios'
import {Route} from 'react-router-dom'
import {useState, useEffect} from 'react'


function App() {

  return (
    <div className="App">
      <header className="App-header">Wine Time</header>
      <Navbar />
      <AllWines />
    </div>
  );
}

export default App;
