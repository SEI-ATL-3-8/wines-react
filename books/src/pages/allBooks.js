import axios from 'axios'
import env from 'react-dotenv'
import {Route} from 'react-router-dom'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

//import SingleBook from '../components/SingleBook'

const AllBook = (props) => {

    const [allBook, setAllBook] = useState([])    


    const fetchAllBook = async () => {
        try {
            let response = await axios.get(`http://myapi-profstream.herokuapp.com/api/3844ec/books/books`)
            // console.log(response.data)
            setAllBook(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchAllBook()
    }, [])
    // console.log(allBook);

    return(
        <div>
           <h1>All Books</h1>
           <ul>
            {allBook.map((book) => {
            return(
           <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
              </li>)              
                   })}         
                </ul>       
               </div>    
              
           

           
        
    )
}


export default AllBook



