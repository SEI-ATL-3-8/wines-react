import React from 'react'
import { Link } from 'react-router-dom'

const BookList = (props) => {
    return (
        <div>
             <ul>
                {props.allBooks.map((book, i) => {
                    return (
                    <li key={i}>
                        <Link to={`/books/${book.id}`}>
                        {book.title}
                        </Link>
                        </li>
                        
                    
                    )
                    console.log(book.title)
                })}
            </ul> 
           
        </div>
    )
}

export default BookList
