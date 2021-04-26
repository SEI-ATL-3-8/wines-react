import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { Route } from 'react-router-dom'
import BookList from '../BookList'
import oneBook from '../oneBook'

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
            <Route path="/book/:id" 
        render={(routingInfo) =>  {
          console.log(routingInfo)

          return<oneBook id={routingInfo.match.params.id} />
        }}/>
        <Route path="/oneBook" component={oneBook} />
        </div>
    )
}

export default AllBook
