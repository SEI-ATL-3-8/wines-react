import env from 'react-dotenv'
import {useEffect, useState} from 'react'
import axios from 'axios'

import AllBookList from './allbookslist'

function AllBooks () {
  
  const [findAllBooks, setfindAllBooks] = useState([])
  const fetchBooks = async () =>{
    try {
      let response = await axios.get(env.BACKEND_URL)
      console.log(response.data);
      setfindAllBooks(response.data)
      
    } catch (error) {
      console.log('Can not find ALL books')
      console.log(error);
    }
  }
  useEffect(fetchBooks,[])
  
  return (
   <div>
   <AllBookList findAllBooks={findAllBooks} />
  </div>


  )
}

export default AllBooks
