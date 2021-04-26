import axios from 'axios'
import env from 'react-dotenv'
import { Link } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


const SingleBook = (props) => {

    const [shouldRedirect, setShouldRedirect] = useState(false)

    const [book, setBook] = useState({})
    const { id } = useParams() //
    // console.log(id)
    const fetchBook = async () => {
        try {
           let response = await axios.get(`${env.BACKEND_URL}/books/${id}`)
                // console.log(response)
                setBook(response.data)
        } catch (error) {
            console.log(error);
        } 
        }


    useEffect(()=>{
        fetchBook()
    },[props.bookId])
    // the second parameter - Only rerun useEffect when bookId changes

    const deleteBook = async () => {
        try {
            let response = axios.delete(`${env.BACKEND_URL}/books/${id}`)
            console.log('Book successfully deleted')
            setShouldRedirect(true) 
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            {shouldRedirect ? 
                <Redirect to = "/books" />
            :
            <div>
                <h1>{book.title}</h1>
                <p>{book.author}</p>
                <p>{book.release_date}</p>

                <button onClick={deleteBook} setShouldRedirect>Delete</button><br></br>
                <Link to="/books">Go Back To All Books</Link>
            </div>
            }
        </div>

    )
}



export default SingleBook