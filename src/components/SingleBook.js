import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useHistory, Redirect } from 'react-router-dom'
const SingleBook = (props) => {
    const [book, setBook] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const history = useHistory();
    const handleEditOnClick = useCallback((bookId) => history.push(`/editbook/${bookId}`), [history]);
    const handleDeleteOnClick = useCallback(async bookId => {
        try {
            setIsLoading(true)
            const response = await axios.delete(`http://myapi-profstream.herokuapp.com/api/320db9/books/${bookId}`)
            console.log(response);
            setRedirect(true)
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }
    }, []);
    const getBookInfo = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`http://myapi-profstream.herokuapp.com/api/320db9/books/${props.bookId}`)
            setBook(response.data);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getBookInfo()
    }, [])
    return (
        <div>
            <h1>Book details</h1>
            {isLoading ? <p>Loading...</p> : null}
            {redirect ? <Redirect to={`/allbooks`} /> : null}
            {book && (
                <div>
                    <img className="bookImage" src={book.image} alt={book.title} />
                    <h3>Title:{book.title}</h3>
                    <h4>Author:{book.author}</h4>
                    <h5>Created: {book.created_at}</h5>
                    <button onClick={() => handleEditOnClick(book.id)}>Edit</button>
                    <button onClick={() => handleDeleteOnClick(book.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}
export default SingleBook