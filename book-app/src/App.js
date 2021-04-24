import './App.css';
import {Route, Link} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Home from './components/pages/Home'
import AllBook from './components/pages/AllBook'
import Create from './components/pages/Create'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" component={Home} exact />
      <Route path="/AllBook" component={AllBook} />
      <Route path="/Create" component={Create} />
    </div>
  );
}

export default App;
