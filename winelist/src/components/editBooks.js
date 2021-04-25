import { useState } from "react"
import env from 'react-dotenv'
import axios from 'axios'
import { useParams } from "react-router"
import AllBooks from './allBooks'

const Editbooks =()=>{
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('') 
    const {id} = useParams()
    const [hasSubmit, setHasSubmit] = useState(false)

    console.log(id);
    const update = async (e)=>{
        e.preventDefault()
        try {
            let newBook = await axios.put(`${env.BACKEND_URL}/${id}`,{
            title:title,
            author:author,
            release_date:date,
            image:image
            })
            console.log(newBook);
                setHasSubmit(true)
        } catch (error) {
            console.log(error);
            console.log('can not update')
        }
        
    }
  
  
  
  
  return(
    <div>

    {hasSubmit ? <AllBooks /> : 
        <form onSubmit ={update}>
        <input type='text' name='title' placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input type='text' name='author' placeholder='author' value={author} onChange={(e)=>setAuthor(e.target.value)} />
        <input type='date' name='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
        <input type='text' name='image' placeholder='Image Url' value={image} onChange={(e)=>setImage(e.target.value)} />
        <input type='submit' value='submit' />
        </form>
    }
    </div>
) 
}

export default Editbooks