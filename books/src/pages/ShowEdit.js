// this file does not work!
// it's just a demo of the idea of combining your show & edit functionalities

import { useState } from 'react'

import Show from './Show'
import Edit from './Edit'

const ShowEdit = () => {
  const [mode, setMode] = useState('show')
  const [book, setBook] = useState({})

  const fetchBook = () => {
    axios.get(`${env.API_URL}/${params.id}`)
    .then((response) => {
      setBook(response.data)
    })
  }
  useEffect(fetchBook, [])

  return (
    <div>
      <button onClick={() => setMode('show')}>Show</button>
      <button onClick={() => setMode('edit')}>Edit</button>
      
      {mode === 'show' &&
        <Show book={book} />
      }

      {mode === 'edit' &&
        <Edit book={book} />
      }
    </div>

  )
}

export default ShowEdit