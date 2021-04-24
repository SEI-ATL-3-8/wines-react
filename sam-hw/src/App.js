import './App.css';
import env from 'react-dotenv'
import axios from 'axios'
import { useEffect, useState} from 'react'
import {Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import AllBooks from './pages/AllBooks'


function App() {

  return (
    <div className="navBar"> 
    <Link to = '/'>HOME</Link>{' | '}
    <Link to = '/allbooks'>BOOK COLLECTION</Link>{' | '}
    <Link to = '/addbook'>ADD BOOK</Link>

    <Route exact path = '/'>
      <Home />
    </Route>

    <Route path = '/allbooks' component = {AllBooks} />

    </div>
  );
}

export default App;
