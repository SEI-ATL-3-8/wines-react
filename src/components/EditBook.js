import { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import axios from 'axios'
const EditBook = (props) => {
    const [redirect, setRedirect] = useState(false)
    const [book, setBook] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name;
        setBook({
            ...book,
            [name]: value
        })
    }
    const getBookInfo = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`http://myapi-profstream.herokuapp.com/api/320db9/books/${props.bookId}`)
            setBook(response.data);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getBookInfo()
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const author = e.target.author.value
        const imageUrl = e.target.image.value
        const releaseDate = e.target.release_date.value
        try {
            const response = await axios.put(`http://myapi-profstream.herokuapp.com/api/320db9/books/${book.id}`, {
                title: title,
                author: author,
                release_date: releaseDate,
                image: imageUrl
            })
            setRedirect(true)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            {redirect ? <Redirect to={`/singlebook/${book.id}`} /> : null}
            <h1>Edit Book</h1>
            {isLoading ? <p>Loading...</p> : null}
            {book && (
                <form onSubmit={(e) => submitHandler(e)}>
                    <div>
                        <input type="text" name="title" placeholder="title" value={book.title} onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" name="author" placeholder="author" value={book.author} onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" name="image" placeholder="imageUrl" value={book.image} onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" name="release_date" placeholder="releaseDate" value={book.release_date} onChange={handleInputChange} />
                    </div>
                    <input type="submit" />
                </form>
            )}
        </div>
    )
}
export default EditBook