import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import BookList from '../BookList'

const AllBook = (props) => {
    const [allBooks, setAllBooks] = useState([])

    const getAllBooks = async () => {
        try {
            let response = await axios.get('http://myapi-profstream.herokuapp.com/api/a2edaa/books')
            console.log(response.data)
            setAllBooks(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllBooks()
    }, [])
    return (
        <div>
            <BookList  allBooks={allBooks} />
        </div>
    )
}

export default AllBook
