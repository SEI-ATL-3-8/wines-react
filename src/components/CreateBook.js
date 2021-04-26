import { useState } from 'react'
import { Redirect } from "react-router-dom";
import axios from 'axios'
const CreateBook = () => {
    const [redirect, setRedirect] = useState(false)
    const [newBook, setNewBook] = useState(null)
    const submitHandler = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const author = e.target.author.value
        const imageUrl = e.target.imageUrl.value
        const releaseDate = e.target.releaseDate.value

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/books`, {
                title: title,
                author: author,
                release_date: releaseDate,
                image: imageUrl
            })
            setNewBook(response.data)
            setRedirect(true)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            {redirect ? <Redirect to={`/singlebook/${newBook.id}`} /> : null}
            <h1>Create Book</h1>
            <form onSubmit={(e) => submitHandler(e)}>
                <div>
                    <input type="text" name="title" placeholder="title" />
                </div>
                <div>
                    <input type="text" name="author" placeholder="author" />
                </div>
                <div>
                    <input type="text" name="imageUrl" placeholder="imageUrl" />
                </div>
                <div>
                    <input type="text" name="releaseDate" placeholder="releaseDate" />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}
export default CreateBook