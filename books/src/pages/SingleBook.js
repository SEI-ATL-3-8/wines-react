import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import EditBookPage from '../pages/EditBookPage'

const SingleBook = (props) => {
    const { id } = useParams()
    
    return (
        <div className="big-one">

            {props.allBooks.filter(book => book.id == id).map((oneBook) => (
                
                <div key={oneBook.id} className="each-container">
                    
                    <h1 className="book-title">{oneBook.title}</h1>
                    <h2 className="book-author">By {oneBook.author}</h2>
                    <img src={oneBook.image} className="book-image" />
                    <h3 className="book-release-date">Released {oneBook.release_date}</h3>
                    <div>
                        <Link to={`/books`}><button onClick={() => { props.deleteBook(id) }}>Delete Book</button></Link>
                        <Link to={`/books/${id}/edit`}><button>Edit Book</button></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default SingleBook