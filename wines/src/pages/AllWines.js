import React from 'react'
import {useState, useEffect} from 'react'

import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'
import SingleWine from '../components/SingleWine'
import axios from 'axios'
import Wines from '../components/Wines'


const AllWines = (props) => {


    

      
    return (
      <div className="allWinesPage">
        <h1>All Wines List</h1>
        <Wines fetchWines={props.allWines}/>

      </div>
    )
}

export default AllWines