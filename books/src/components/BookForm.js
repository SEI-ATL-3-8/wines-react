
import { Redirect } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import env from "react-dotenv";
const BookForm = (props) => {
    const [status, setStatus] = useState(0)
    const [id, setid] = useState(0)
    const bookInfo = {
        title: "",
        author: "",
        release_date: "",
        image: ""
    }
    const [book, setBook] = useState(bookInfo)
    const handleChange = (e) => {
        const { name, value } = e.target
        setBook({
            ...book,
            [name]: value
        })
    }



    const createSubmit = (e) => {
        e.preventDefault()
        createBook(book.title, book.author, book.release_date, book.image)
    }


    const createBook = async (title, author, release_date, image) => {
        try {
          let res = await axios.post(`${env.BACKEND_URL}`, {
            title: title,
            author: author,
            release_date: release_date,
            image: image
          })
          setid(res.data.id)
       
          {res.status == 201 ? 
            setStatus(201) 
           : alert('try again')}
          props.getAllBooks()
         
        } catch (error) {
          console.log(error)

        }
      }
    
    
      if (status === 201){
        return <Redirect to= {`/books/${id}`} />
   }

    return (
        <div className="form-container">

            <div className="create-form">
                <h2>Create New Book</h2>
                <form className="create-form" onSubmit={createSubmit}>
                    <input type="text" name="title" placeholder="Book Title" value={book.title} onChange={handleChange} />
                    <input type="text" name="author" placeholder="Author Name" value={book.author} onChange={handleChange} />
                    <input type="text" name="release_date" placeholder="Release Date" value={book.release_date} onChange={handleChange} />
                    <input type="text" name="image" placeholder="Image URL" value={book.image} onChange={handleChange} />
                    <input type="submit" value="submit" />
                </form>
            </div>

        </div>

    )
}

export default BookForm