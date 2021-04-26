import {Link} from 'react-router-dom'

const AllBooks = (props) => {
  return (
    <div className='allBookHolder'>
      
      <div>
      <h1>Hello From All Books</h1>
      {props.books.map((book) => (
        <Link key={book.id} exact to={`/books/${book.id}`}>
        <div  className="bookHolder">
          <div className='bookTitle'><p>{book.title}</p></div>
          <div className='bookAuthor'><p>{book.author}</p></div>
        </div>
        </Link>
      ))}
      </div>
      <div className='buttonDiv'>
      <button>Add Book</button>
      </div>
        
    </div>
  )
}
export default AllBooks