import axios from 'axios'
import env from 'react-dotenv'
import {useState, useEffect} from 'react'

const Book = (props) => {
  const [book, setBook] = useState([])

  const getBook = () => {
    axios.get(`${env.BOOKS_API}/${props.id}`)
    .then((res) => {
      setBook(res.data)
    })
  }
  useEffect(getBook, [])


  return (
    <div className='singleBookHolder'>
      <div>
      <h1>Hello from Book</h1>
      <div className='specificBook'>
        <div><p>{book.title}</p></div>
        <div><p>{book.author}</p></div>
        <div><p>{book.release_date}</p></div>
      </div>
      </div>
      <div className='buttonDiv'>
        <button>Edit Book</button>
        <button>Delete Book</button>
      </div>
    </div>
  )
}
export default Book