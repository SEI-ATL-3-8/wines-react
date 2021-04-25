import './App.css';
import env from 'react-dotenv'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import AllWinesPage from './Pages/AllWinesPage'
import CreateNewPage from './Pages/CreateNewPage'
import SingleWine from './Pages/SingleWine'
import NavBar from './Components/NavBar'




function App() {

  const [allWines, setAllWines] = useState([])

  const getAllWines = async () => {
    //console.log('Sending get request from API')
    let response = await axios.get(`${env.API_URL}`)
    //console.log('Received data from API', response.data)
    setAllWines(response.data)
  }

  useEffect(() => {getAllWines()}, [])

  

  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' render={() => {
         return <HomePage />

      }} />

      <Route exact path='/wines' render={() => {
         return <AllWinesPage allWines={allWines}/>

      }} />

      <Route path='/wines/:id' render={(routingProps) => {
         return <SingleWine id={routingProps.match.params.id} getAllWines={getAllWines}/>

      }} />

      <Route path='/new' render={() => {
         return <CreateNewPage getAllWines={getAllWines}/>

      }} />

    </div>
  );
}

export default App;
