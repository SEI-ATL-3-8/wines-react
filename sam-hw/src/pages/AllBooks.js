import {Route} from 'react-router-dom'

import BookList from '../components/BookList'
import SingleBook from '../pages/SingleBook'

const AllBooks = () => {

    return (
        <div>
            <h1>BOOK COLLECTION</h1>
            <BookList />
        </div>

    )
  
}
export default AllBooks;