import './App.css';
import env from 'react-dotenv'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import AllWinesPage from './Pages/AllWinesPage'
import CreateNewPage from './Pages/CreateNewPage'
import NavBar from './Components/NavBar'




function App() {


  

  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' render={() => {
         
         return <HomePage />
      }} />

      <Route exact path='/wines' render={() => {
         
         return <AllWinesPage />
      }} />

      <Route path='/new' render={() => {
         
         return <CreateNewPage />
      }} />

    </div>
  );
}

export default App;
