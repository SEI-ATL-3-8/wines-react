import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SingleWine = (props) => {

    const [showWine, setShowWine] = useState ({})

    const fetchSingleWine = () => {
   
        axios.get(`http://myapi-profstream.herokuapp.com/api/07238c/wines/${props.id}`)
        .then((response) => {
        console.log(response)
         setShowWine(response.data) 
        })
       }
      
      useEffect(fetchSingleWine, [])
      
    return (
        <div>
            {/* {showWine.properties === undefined ? 
            <p>loading...</p>
            : */}
            <div>
            <h2>Name: {showWine.name}</h2>
            <p>Year: {showWine.year}</p>
            <p>Country: {showWine.country}</p>
            <img src={showWine.picture}/>
            <p>Description: {showWine.description}</p>
            <span>Cost: ${showWine.price}</span>
            </div>

              {/* } */}
              <div>
                         <Link to={`/allwines`}><button onClick = {() =>(
                 axios.delete (`http://myapi-profstream.herokuapp.com/api/07238c/wines/${props.id}`).then
                 ((response) =>{
                      console.log(response)
                 })
             )}>Delete Wine</button></Link>
                         <Link to={`/allwines/${props.id}/edit`}><button>Edit Wine</button></Link>
                     </div>
        </div>
    )
}

export default SingleWine