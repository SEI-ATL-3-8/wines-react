import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import axios from 'axios'
import env from 'react-dotenv'

const Edit = () => {
  const params = useParams()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [book, setBook] = useState({
    title: '',
    author: '',
    release_date: '',
    image: ''
  })

  const fetchBook = () => {
    axios.get(`${env.API_URL}/${params.id}`)
    .then((response) => {
      setBook(response.data)
    })
  }
  useEffect(fetchBook, [])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setBook({
      ...book,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios.post(env.API_URL, {
    //   title: book.title,
    //   author: book.author,
    //   release_date: book.release_date,
    //   image: book.image
    // })
    axios.put(`${env.API_URL}/${params.id}`, book).then((response) => {
      console.log(response);
      // history.push({ pathname: `/show/${response.data.id}` })
      setShouldRedirect(true)
    })
  }

  return (
    <div>
      { shouldRedirect && <Redirect to={`/show/${params.id}`} /> }

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="new-title">Title:</label>
          <input name="title" value={book.title} onChange={handleChange} />
        </div>
        
        <div>
          <label htmlFor="new-author">Author:</label>
          <input name="author" value={book.author} onChange={handleChange} />
        </div>
                
        <div>
          <label htmlFor="new-release_date">Release Date:</label>
          <input name="release_date" value={book.release_date} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="new-image">Image:</label>
          <input name="image" value={book.image} onChange={handleChange} />
        </div>

        <input type="submit" value="Update!" />
      </form>
    </div>
  )
}

export default Edit