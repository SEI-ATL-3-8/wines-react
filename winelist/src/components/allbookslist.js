import {Link} from 'react-router-dom'
import env from 'react-dotenv'

const allBookList = (props) => {

return(
    <div>
      {props.findAllBooks.map((books,id) => {
          return (
            <li  key={books.id}>
              {/* {console.log(env.BACKEND_URL)} */}
              <Link to={`/book/${books.id}`}> {books.title} 
              </Link>
            </li>
    )
  })}
    </div>

)

}
export default allBookList