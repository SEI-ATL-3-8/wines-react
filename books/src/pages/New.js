import { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import axios from 'axios'
import env from 'react-dotenv'
import { Redirect } from 'react-router'

const New = () => {  
  // const history = useHistory()
  const [shouldRedirect, setShouldRedirect] = useState(null)
  const [book, setBook] = useState({
    title: '',
    author: '',
    release_date: '',
    image: ''
  })

  // useEffect(() => {
  //   if (shouldRedirect) {
  //     history.push(`/show/${shouldRedirect}`)
  //   }
  // }, [shouldRedirect])

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
    axios.post(env.API_URL, book).then((response) => {
      console.log(response);
      // history.push({ pathname: `/show/${response.data.id}` })
      setShouldRedirect(response.data.id)
    })
  }

  return (
    <div>
      {/* if the shouldRedirect piece of state is truthy (ie anything other than null, false, etc), the Redirect component will hit the page, and we'll immediately be redirected */}
      { shouldRedirect && <Redirect to={`/show/${shouldRedirect}`} /> }

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

        <input type="submit" value="Create it!" />
      </form>
    </div>
  )
}

export default New