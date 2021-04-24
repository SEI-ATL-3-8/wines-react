import { useState } from 'react'

const AddBook = (props) => {
    // console.log(props);
    const [newBook, setNewBook] = useState({title: '', author: '', release_date: '', image: ''})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setNewBook({...newBook, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.postBook(newBook)
    }

    console.log(newBook);

    return (
        <div>
            <h1>Add Book View</h1>
            <form onSubmit = {handleSubmit}>
                <input type = 'text' placeholder = 'Title' onChange = {handleChange} name = 'title' value = {newBook.title} />
                <input type = 'text' placeholder = 'Author' onChange = {handleChange} name = 'author' value = {newBook.author} />
                <input type = 'text' placeholder = 'Release Date' onChange = {handleChange} name = 'release_date' value = {newBook.release_date} />
                <input type = 'url' placeholder = 'Image' onChange = {handleChange} name = 'image' value = {newBook.image} />
                <input type = 'submit' value = 'ADD BOOK' />
            </form>
        </div> )
}

export default AddBook;