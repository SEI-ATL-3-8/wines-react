import './App.css';
import env from 'react-dotenv'
import axios from 'axios'
import { useEffect, useState} from 'react'
import {Route, Link, Switch} from 'react-router-dom'

import Home from './pages/Home'
import AllBooks from './pages/AllBooks'
import SingleBook from './pages/SingleBook'


function App() {

  return (
    <div className="navBar"> 
    <Link to = '/'>HOME</Link>{' | '}
    <Link to = '/allbooks'>BOOK COLLECTION</Link>{' | '}
    <Link to = '/addbook'>ADD BOOK</Link>

    <Route exact path = '/'>
      <Home />
    </Route>
    
   
    <Route exact path = '/allbooks' component = {AllBooks} />
    <Route path = '/allbooks/:id' render = {(routingInfo) => {
      return <SingleBook id = {routingInfo.match.params.id} />
    }} />

    </div>
  );
}

export default App;
