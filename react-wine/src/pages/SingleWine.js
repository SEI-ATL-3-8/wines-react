import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const apiUrl = 'http://myapi-profstream.herokuapp.com/api/21a11f/wines'

const SingleWine = (props) => {
    const [wine, setWine] = useState({})

    const fetchWine = async () => {
        try {
          let response = await axios.get(`${apiUrl}/${props.id}`)
          setWine(response.data)
        
       } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
          fetchWine()},[])

    return (
        <div>
            {/* {wine === undefined ?
            <p>Loading from a galaxy far, far away...</p>
            : */}
            <div key={wine.id} className="winediv">
                <h5>{wine.name}</h5>
                <img src={wine.picture}></img>
                <span>{wine.year}</span>
                <span>{wine.grapes}</span>
                <span>{wine.country}</span>
                <span>{wine.region}</span>
                <p>{wine.description}<br></br></p>
                <p>{wine.price}<br></br></p>
            </div>
            
            <Link to="/AllWines">Back to All Wines</Link>
        </div>
    )
}

export default SingleWine