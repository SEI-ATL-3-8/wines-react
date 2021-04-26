import axios from 'axios'
import env from 'react-dotenv'
import { Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SingleBook from '../pages/SingleBook'

const AllBooks = (props) => {

    const [allBooks, setAllBooks] = useState([])


    const fetchAllBooks = async () => {
        try {
            let response = await axios.get(`${env.BACKEND_URL}/books`)
            setAllBooks(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchAllBooks()
    }, [])

    return(
        <div>
           <h1>All Books</h1>
           <ul>
               {allBooks.map((book) => {
                   return(
                       <li key={book.id}>
                           <Link to=
                            {`/books/${book.id}`}>{book.title}
                           </Link>
                       </li>
                   )
               })}
           </ul>
        </div>
    )
}


export default AllBooks
