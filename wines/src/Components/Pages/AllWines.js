import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const AllWines = () => {
    const [allWines, setAllWines] = useState([])

    const fetchWines = async () => {
        let response = await axios.get('http://myapi-profstream.herokuapp.com/api/9d4029/wines')
        setAllWines(response.data)
    }
    useEffect(fetchWines, [])
    
    let wines = allWines.map(wine => (
        <div key={wine.id}>
           <Link to={`/wines/${wine.id}`} >{wine.name}</Link>
        </div>
    ))
    return (
        <div>{wines}</div>
    )
}
export default AllWines