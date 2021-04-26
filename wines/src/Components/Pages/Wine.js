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
    const editWine = (e) => {
        console.log(e.target[0].value)
       axios.pust('http://myapi-profstream.herokuapp.com/api/9d4029/wines',
        {
            name: e.target[0].value, 
            year:e.target[1].value, 
            grapes:e.target[2].value, 
            country:e.target[3].value,
            region:e.target[4].value,
            description:e.target[5].value,
            picture:e.target[6].value,
            price:e.target[7].value
            
        })
    }
    const displayEdit = async (e) => {
        return(
            <form onSubmit={(e) => {e.preventDefault(); editWine(e)}}>
                <input value="Name"/>
                <input value="Year"/>
                <input value="Grapes"/>
                <input value="Country"/>
                <input value="Region"/>
                <input value="Description"/>
                <input value="Picture"/>
                <input value="Price"/>
                <input type="submit" />
            </form>
        )
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
            <button onClick={ () => {deleteWine()}}>Delete</button>
            <button onClick={ (e) => {displayEdit(e)}}>Edit</button>
        </div>
    )
}
export default Wine