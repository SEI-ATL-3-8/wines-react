import axios from 'axios'
import { useEffect, useState } from 'react'

const CreateBook = (props) => {

       const newBookInfo = {
           title: "",
           author: "",
           date: "",
           img: ""
       }
       const [newBook, setNewBook] = useState(newBookInfo)


       const handleChange = (e) => {
           const {name, value} = e.target
           setNewBook({
               ...newBook,
               [name]: value
           })
       }

       const handleSubmit = (e) => {
           e.preventDefault()
           console.log('you clicked submit');
           console.log(newBook);
       }


       const postBook = async () => {
           try {
               let response = await axios.post(`${env.BACKEND_URL}/books`,{
                    
               })
           } catch (error) {
               
           }
       }


    return(
        <div>
            <form className="createForm" onSubmit = {handleSubmit}> 
                <input type="text" name="title" placeholder="Title" value={newBook.title} onChange={handleChange}></input>
                <input type="text" name="author"  placeholder="author name" value={newBook.author} onChange={handleChange}></input>
                <input type="text" name="date"  placeholder="Release Date" value={newBook.date} onChange={handleChange}></input >
                <input type="url" name="img"  placeholder="Image URL" value={newBook.img} onChange={handleChange}></input>
                <input type="submit" value="Create A New Book"></input>
            </form>
        </div>
    )

}

export default CreateBook