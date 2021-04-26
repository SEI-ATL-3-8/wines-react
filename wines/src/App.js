import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'
import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import AllWines from './pages/AllWines'
import NewWine from './pages/NewWine'
import SingleWine from './components/SingleWine';
import axios from 'axios'
import Wines from './components/Wines'
import CreateWineForm from './components/CreateWineForm';
import EditWineForm from './components/EditWineForm';



function App() {

  const [allWines, setAllWines] = useState ([])
  

  const fetchWines = () => {

    axios.get("http://myapi-profstream.herokuapp.com/api/07238c/wines")
    .then((response) => {
    console.log(response.data)
     setAllWines(response.data) 
    })
   }
 
  useEffect(fetchWines, [])
  

  

  return (
    <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/allwines" 
        render={() => {
          return <Wines allWines={allWines} setAllWines={setAllWines}/>
        }}
      />
        <Route path="/allwines/:id"
         exact render={(routingInfo) => {
            return <SingleWine id={routingInfo.match.params.id} />
          }}
        />

        <Route path="/create" render = {() => <CreateWineForm />}/>
        <Route path = '/allwines/:id/edit' render = {() => <EditWineForm />} />
    </div>
  );
}

export default App;
