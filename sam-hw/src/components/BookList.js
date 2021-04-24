import axios from 'axios'
import env from 'react-dotenv'
import {useState, useEffect} from 'react'
import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

const BookList = () => {
    const [allBooks, setAllBooks] = useState([])

    const fetchAllBooks = () => {
      axios.get(`${env.API_URL}`)
        .then((response) => {
            // console.log(response);
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