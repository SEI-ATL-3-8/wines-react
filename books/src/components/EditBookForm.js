
import { useParams, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import env from "react-dotenv";
import { render } from 'react-dom';
const EditBookForm = (props) => {
    const { id } = useParams()
    const [book, setBook] = useState("") 
    // const [status, setStatus] = useState(0)
    const [status, setStatus] = useState(0)
    let title = props.bookToEdit.title

    let bookInfo = {
        title: title,
        author: `${props.bookToEdit.author}`,
        release_date: `${props.bookToEdit.release_date}`,
        image: `${props.bookToEdit.image}`
    }
  
      
    useEffect(() => { setBook(bookInfo) }, [bookInfo.title])
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setBook({
            ...book,
            [name]: value
        })
    }

    const createSubmit =  (e) => {
        e.preventDefault()
        editBook(id, book.title, book.author, book.release_date, book.image)  
    }

    const editBook = async (id, title, author, release_date, image) => {
        try {
          let editRes = await axios.put(`${env.BACKEND_URL}/${id}`, {
            title: title,
            author: author,
            release_date: release_date,
            image: image
          })
          let res = editRes.status
          console.log(res)
          {res == 201 ? 
           setStatus(201) 
          : alert('try again')}
          props.getAllBooks()
        } catch (error) {
          console.log(error)
          alert(error)
        }
      }

       
      if (status === 201){
           return <Redirect to= {`/books/${id}`} />
      }
    

    return (
        <div className="form-container">
            
            {props.allBooks.filter(book => book.id == id).map((each) => (
                props.setBookToEdit(each)
            ))}
            
            <div className="create-form">
                <h2>Edit Book</h2>
                <form className="create-form" onSubmit={createSubmit}>
                    <input type="text" name="title" value={book.title} onChange={handleChange} />
                    <input type="text" name="author" value={book.author} onChange={handleChange} />
                    <input type="text" name="release_date" value={book.release_date} onChange={handleChange} />
                    <input type="text" name="image" placeholder="Image URL" value={book.image} onChange={handleChange} />
                    <input type="submit" value="submit" />
                </form>
            </div>

        </div>

    )
}

export default EditBookForm