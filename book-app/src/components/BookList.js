import React from 'react'

const BookList = (props) => {
    return (
        <div>
             <ul>
                {props.allBooks.map((book, i) => {
                    return (
                    <li key={i}>{book.title}</li>
                    
                    )
                    console.log(book.title)
                })}
            </ul> 
           
        </div>
    )
}

export default BookList
