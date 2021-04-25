import env from 'react-dotenv'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams, Redirect} from 'react-router-dom'




function Singlebooks (props) {

const {id} = useParams()
const [findOneBooks, setfindOneBooks] = useState({})
const [redirect, setRedirect] = useState(null)
// console.log(`${env.BACKEND_URL}/${id}`)
const fetchBooks = async () =>{
    try {
      let response = await axios.get(`${env.BACKEND_URL}/${id}`)
      console.log(response.data);
      setfindOneBooks(response.data)
      
    } catch (error) {
      console.log('Can not find ONE books')
      console.log(error);
    }
}
useEffect(fetchBooks,[])

const DeleteBook = async () => {
  try {
      let response = await axios.delete(`${env.BACKEND_URL}/${id}`)
        console.log(response);
        if(response.status === 200){
          setRedirect('Deleted')
        }
      } catch (error) {
        console.log(error)
        console.log('can not delete')
      }
  }

return(
<div>

  {redirect==='Deleted' ? 
  <Redirect to="/allbooks" />
  :null }

  <div>
    <h2>Title:  {findOneBooks.title}</h2>
    <p>Author:  {findOneBooks.author}</p>
    <p>Release Date:  {findOneBooks.release_date}</p>
    <img src={findOneBooks.image} width="150" height="200"></img>
  </div>

  <div>
    <p>
      <button onClick={DeleteBook}>Delete Book</button>
    </p>
    <p>
      <Link to = '/allbooks'>Back To all Books</Link>
    </p>
    <p>
    <Link to = {`/edit/${id}`}>Edit Books</Link>

    </p>
  </div>
</div>

)

}

export default Singlebooks