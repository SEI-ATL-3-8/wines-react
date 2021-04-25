import './App.css';
import axios from 'axios'
import { Route } from 'react-router-dom'
import env from 'react-dotenv'
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import AllBook from './pages/AllBook'
import Create from './pages/CreateBook'
import CreateBook from './pages/CreateBook';

// console.log(env) This is to check env


function App() {
  return (
    <div className="App">
     <Navbar />
     <Route 
      path = "/"
      exact
      render = { () => 
        <Home />
      }
     />

     <Route 
      path="/books"
      render = { () =>
        <AllBook />
      }
     />

     <Route 
      path="/createBooks"
      render = { () =>
        <CreateBook />
      }
     />
    </div>
  );
}

export default App;
