import axios from 'axios'
import env from 'react-dotenv'
import {useState, useEffect} from 'react'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const BookList = (props) => {
    const [allBooks, setAllBooks] = useState([])

    const fetchAllBooks = () => {
      axios.get(`${env.API_URL}`)
        .then((response) => {
            console.log(response);
          setAllBooks(response.data);
        })
    }

    useEffect(fetchAllBooks, [])
    
    const bookList = allBooks.map(books => (
        <li key = {books.id}>
            <Link to = {`allbooks/${books.id}`}>{books.title}</Link>
        </li>
    ))

    return (
        <div>
            <ul>
                {bookList}
            </ul>
        </div>
    )
}

export default BookList;