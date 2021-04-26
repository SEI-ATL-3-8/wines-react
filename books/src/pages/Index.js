import axios from 'axios'
import env from 'react-dotenv'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  const [allBooks, setAllBooks] = useState([])
  
  const fetchAllBooks = () => {
    axios.get(env.API_URL)
    .then((response) => {
      setAllBooks(response.data)
    })
  }
  useEffect(fetchAllBooks, [])

  return (
    <div>
      {allBooks.length === 0 ?
        <p>Loading...</p>
        :
        <ul>
          {allBooks.map((book) => {
            return (
              <li key={book.id}>
                <Link to={`/show/${book.id}`}>{book.title}</Link>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}

export default Index