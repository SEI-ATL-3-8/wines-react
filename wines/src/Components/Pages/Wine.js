import axios from 'axios'
import {useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'

const Wine = () => {
    const {id} = useParams()
    const [wine, setWine] = useState([])

    const fetchWines = async () => {
        let response = await axios.get(`http://myapi-profstream.herokuapp.com/api/9d4029/wines/${id}`)
        setWine(response.data)
        console.log(response)
    }

    useEffect(fetchWines, [id])

    const deleteWine = async () => {
        let response = await axios.delete(`http://myapi-profstream.herokuapp.com/api/9d4029/wines/${id}`)
    }

    const editWine = async () => {
        
    }

    return(
        <div>
            <p>{wine.name}</p>
            <p>{wine.year}</p>
            <p>{wine.grapes}</p>
            <p>{wine.country}</p>
            <p>{wine.region}</p>
            <p>{wine.description}</p>
            <p>{wine.picture}</p>
            <p>{wine.price}</p>
            <button onClick={deleteWine}>Delete</button>
            <button onClick={editWine}>Edit</button>
        </div>
    )
}
export default Wine