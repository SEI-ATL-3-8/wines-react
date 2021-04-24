import { useState } from "react"

const UpdateBook = (props) => {
    const [updateBook, setUpdateBook] = useState({title: '', author: '', release_date: '', image: ''})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUpdateBook({...updateBook, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.putBook(updateBook)
    }

    return (
        <div className = 'updateForm' >
            <h1>Update Book</h1>
            <form onSubmit = {handleSubmit}>
                <input type = 'text' placeholder = 'Title' onChange = {handleChange} name = 'title' value = {updateBook.title} />
                <input type = 'text' placeholder = 'Author' onChange = {handleChange} name = 'author' value = {updateBook.author} />
                <input type = 'text' placeholder = 'Release Date' onChange = {handleChange} name = 'release_date' value = {updateBook.release_date} />
                <input type = 'url' placeholder = 'Image' onChange = {handleChange} name = 'image' value = {updateBook.image} />
                <input type = 'submit' value = 'UPDATE' />
            </form>
        </div>
    )
}

export default UpdateBook;