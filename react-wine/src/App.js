import './App.css';
import Navbar from './components/Navbar'
import AllWines from './pages/AllWines'
import SingleWine from './pages/SingleWine'

import axios from 'axios'
import {Route} from 'react-router-dom'
import {useState, useEffect} from 'react'


function App() {

  return (
    <div className="App">
      <header className="App-header">Wine Time</header>
      <Navbar />
      <Route
        exact path = "/AllWines"
        render={() =>
       <AllWines /> } />
      <Route 
       path="/wines/:id"
       render={(routingInfo) => {
        return <SingleWine id={routingInfo.match.params.id} />
      }}/>
    </div>
  );
}


export default App;
