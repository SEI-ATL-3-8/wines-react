import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const OneBook = (props) => {
    const {id} = useParams()
    const [singleBook, setSingleBook] = useState({})

    const fetchBook = () => {
        axios.get(`http://myapi-profstream.herokuapp.com/api/a2edaa/books/${props.id}`).then((
            response => {
                setSingleBook(response.data)
                console.log(response.data)
            }
        ))
    }
    useEffect(fetchBook, [])
    return (
        <div>
            <h1>Title: {singleBook.title}</h1>
        </div>
    )
}

export default OneBook
