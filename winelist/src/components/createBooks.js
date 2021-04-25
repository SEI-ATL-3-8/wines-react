import {useState} from 'react'
import axios from 'axios'
import env from 'react-dotenv'
import AllBooks from './allBooks'


const CreateBooks = () => {
 const [title, setTitle] = useState("")   
 const [author, setAuthor] = useState("")   
 const [date, setDate] = useState("")
 const [image,setImage] = useState('') 
 const [hasSubmit, setHasSubmit] = useState(false)
 

 const handleSubmit = async (e) =>{
   e.preventDefault()
    try {
        let response = await axios.post(`${env.BACKEND_URL}`,{
          title: title,
          author: author,
          release_date: date,
          image: image
        })
        console.log(response)
        setHasSubmit(true)
    } catch (error) {
        console.log(error)
        console.log('can not create new book');
    } 
 } 
  return (
  <div>

{hasSubmit ? <AllBooks /> : 
<form onSubmit = {handleSubmit}>

<input type='text' name='title' placeholder='Title' value={title} onChange={(e)=>setTitle (e.target.value)} />
<input type='text' name='author' placeholder='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
<input type='date' name='date' value={date} onChange={(e) =>setDate(e.target.value)}/>
<input type='text' name='image' value={image} placeholder='Image Url' onChange={(e) => setImage(e.target.value)}/>
<input type='submit' value='submit' />

</form>
}




</div>


    )
}

    export default CreateBooks