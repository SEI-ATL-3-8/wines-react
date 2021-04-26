import axios from 'axios'
import env from 'react-dotenv'
import { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'

const Show = (props) => {
  const [book, setBook] = useState({})
  const params = useParams()
  const history = useHistory()

  const fetchBook = () => {
    axios.get(`${env.API_URL}/${params.id}`)
    .then((response) => {
      setBook(response.data)
    })
  }
  useEffect(fetchBook, [])
  
  return (
    <div>
      <div>Title: {book.title}</div>
      <div>Author: {book.author}</div>
      <div>Release: {book.release_date}</div>
      <img src={book.image} />

      <button
        onClick={() => {
          axios.delete(`${env.API_URL}/${params.id}`)
          .then(() => {
            history.push('/index')
          })
        }}
      >Delete</button>

      <Link to={`/edit/${params.id}`}>Edit</Link>
    </div>
  )
}

export default Show