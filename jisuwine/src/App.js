import './App.css';

import axios from 'axios'
import {useEffect, useState} from 'react'
import {Route} from "react-router-dom"
import Allwines from './pages/Allbook'
import Singlewine from './pages/Single'
import Main from './pages/Main'
import Navbar from './components/Navbar'
import Create from './pages/Create'

function App() {

  const [wine,setWine] =useState([])
    // this console.log for checking the infinite loop of the request
    console.log('fetching');
   const fetchWines = () => {
     axios.get('http://myapi-profstream.herokuapp.com/api/235b48/books').then((response)=>{
      setWine(response.data)
      // console.log(response.data);
    })
   }    

  useEffect(fetchWines, [])



  return (
    <div>
      <Navbar />
      <hr/>
      
      <Route
      path='/' exact
      render ={()=>{
        return<Main/>
      
      }}
      />
      
      <Route 
         path='/wine' exact
        render = {()=>{
        return <Allwines wine ={wine}/>
      }}
      />
      
      
      <Route 
        path='/wine/:id'
        render ={(routingInfo)=>{
          return <Singlewine id={routingInfo.match.params.id}/>
        }}
       />

       <Route 
       path='/wine/create'
       render={()=>{
         return <Create/>
       }}
       />
       
      
    </div>
  );
}

export default App;
