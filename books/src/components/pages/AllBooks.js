import { Link } from 'react-router-dom';

const AllBooks = (props) =>
{   
    return (
        <div>
            {props.allBooks.map(book =>
            {
                return (
                    <div key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBooks;