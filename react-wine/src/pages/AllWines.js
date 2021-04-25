import axios from 'axios'
import {useEffect, useState} from 'react'

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
    <div className="allWines">
      <h1>All Wines</h1>
    </div>
  )
}

export default AllWines