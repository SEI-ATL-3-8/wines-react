import axios from 'axios'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const apiUrl = 'http://myapi-profstream.herokuapp.com/api/21a11f/wines'

const AllWines = (props) => {
    const [allWines, setAllWines] = useState([])


  const fetchAllWines = async () => {
    try {
      let response = await axios.get(apiUrl)
      setAllWines(response.data)

    
   } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      fetchAllWines()},[])

  return (
    <div>
      <h1>All Wines</h1>
      <div className="wineinfo">

      {allWines.map((wine) => {
        return (
          <div key={wine.id} className="winediv">
            <h5>{wine.name}</h5>
            <img src={wine.picture}></img>
            <span>{wine.country}</span>
            <Link to={`/wines/${wine.id}`}>More Details</Link>
          </div>
        )}  
      )}
      </div>
    </div>
    )
  }


export default AllWines