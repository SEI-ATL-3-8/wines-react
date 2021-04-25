import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const AllBooks = () => {
    const [allBooks, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const getAllBooks = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get('http://myapi-profstream.herokuapp.com/api/320db9/books')
            setBooks(response.data);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }

    }
    useEffect(() => {
        getAllBooks()
    }, [])
    return (
        <div>
            <h1>AllBooks</h1>
            <ul>
                {isLoading ? <p>Loading...</p> : null}
                {allBooks.length !== 0 ?
                    allBooks.map(book => {
                        return <li key={book.id}><Link to={`/singlebook/${book.id}`}>{book.title}</Link></li>
                    })
                    : null
                }
            </ul>
        </div>
    )
}
export default AllBooks