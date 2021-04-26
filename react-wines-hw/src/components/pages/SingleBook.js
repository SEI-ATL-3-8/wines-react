import axios from 'axios'
import env from 'react-dotenv'
import { Router, Link } from 'react-router-dom'
import { useEffect, useState} from 'react'


const SingleBook = (props) => {

    const [book, setBook] = useState({})

    const fetchBook = async () => {
        try {
           let response = await axios.get(`${env.BACKEND_URL}/books/${props.bookId}`)
                setBook(response.data)
        } catch (error) {
            console.log(error);
        }
        }


    useEffect(()=>{
        fetchBook()
    },[props.bookId])

    return(
        <div>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.release_date}</p>

            <Link to="/books">Back To All Books</Link>
        </div>
    )
}



export default SingleBook;
