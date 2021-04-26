import {Link } from 'react-router-dom'

const DisplayAllBooks = (props) => {
    
    return (
        <div className="all-books">
            <h1>All Books</h1>
            {
                props.getAllBooks.map((book) => (
                    <div key={book.id} className="each-book">
                        <Link to ={`/books/${book.id}`}><h3>{book.title}</h3></Link>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAllBooks