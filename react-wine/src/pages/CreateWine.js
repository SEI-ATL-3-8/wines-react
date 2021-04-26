import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const apiUrl = 'http://myapi-profstream.herokuapp.com/api/21a11f/wines'

const CreateWine = (props) => {
    const [newWine, setNewWine] = useState([])


  const postNewWine = async () => {
    try {
      let response = await axios.post(apiUrl)
      setNewWine(response.data)

    
   } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      postNewWine()},[])

  return (
    <div>
      <h1>Create A Wine</h1>
      <div className="wineform">
        <form onSubmit={((e) => {
            e.preventDefault()
              postNewWine({

            })
        })}>
            <input name="name" type="text" placeholder="name"/>
            <input name="picture" type="text" placeholder="image url"/>
            <input name="year" type="number" placeholder="year"/>
            <input name="grapes" type="text" placeholder="grapes"/>
            <input name="country" type="text" placeholder="country"/>
            <input name="region" type="text" placeholder="region"/>
            <input name="description" type="text" placeholder="description"/>
            <input name="price" type="number" placeholder="price"/>
            <input type="sumbit" value="Add Wine"/>
        </form>
      </div>
    </div>
        )  
  }


export default CreateWine