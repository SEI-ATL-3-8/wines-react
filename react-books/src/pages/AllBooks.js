import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function AllBooks() {

    const [allBooks, setAllBooks] = useState([])

    const fetchBooks = async () => {
        try{
            let response = await axios.get('http://myapi-profstream.herokuapp.com/api/148e86/books')
            setAllBooks(response.data)
            console.log(allBooks)
        }catch(error){
            console.log(error)
    }

}
useEffect(() => {
    fetchBooks()
},[])

    return (
        <div className='listAllBooks'>
            {allBooks.map((book) => {
                return <Link to={{pathname: '/book', state: book}} key={book.id} className='bookName'>{book.title}</Link>
            })}
        </div>
    )
}
