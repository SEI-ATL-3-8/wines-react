import axios from 'axios'
import env from 'react-dotenv'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const AllBook = (props) => {

    const [allBook, setAllBook] = useState([])    


    const fetchAllBook = async () => {
        try {
            let response = await axios.get(`${env.BACKEND_URL}/books`)
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


export default AllBook