import env from 'react-dotenv'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SingleWineMini from '../Components/SingleWineMini'




const AllWinesPage = () => {

const [allWines, setAllWines] = useState([])

  const getAllWines = async () => {
    console.log('Sending get request from API')
    let response = await axios.get(`${env.API_URL}`)
    console.log('Received data from API', response.data)
    setAllWines(response.data)
  }

  useEffect( () => { getAllWines() }, [] )

    return (
        <div className="page">
            <span className="home-h1">Here are the wines!</span>
            <SingleWineMini allWines={allWines} />
        </div>
    )
}


export default AllWinesPage