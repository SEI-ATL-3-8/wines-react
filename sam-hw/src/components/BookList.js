import {Link} from 'react-router-dom'
import env from 'react-dotenv'
import axios from 'axios'
import { useEffect, useState } from 'react';

const BookList = () => {
    const [allBooks, setAllBooks] = useState([])

    const fetchAllBooks = () => {
      axios.get(`${env.API_URL}`)
        .then((response) => {
            console.log(response);
          setAllBooks(response.data);
        })
    }
    useEffect(fetchAllBooks, [])

    
    const bookList = allBooks.map(book => (
        <li className = 'bookTitleList' key = {book.id}>
            <Link to = {`/allbooks/${book.id}`}>{book.title}</Link>
        </li>
    ))

    return (
        <div>
            <ul className = 'bookListContainer' >
                {bookList}
            </ul>
        </div>
    )
}

export default BookList;