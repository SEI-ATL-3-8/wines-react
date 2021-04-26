import { useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import { withRouter, useHistory } from 'react-router-dom';

const CreateBook = () =>
{
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [image, setImage] = useState('');

    const history = useHistory();

    const newBook = (e) =>
    {
        e.preventDefault();
        // post new book to api and redirect user to new books details
        axios.post(env.API_URL, {
            title: title,
            author: author,
            release_date: releaseDate,
            image: image
        }).then((res) =>
        {
            // console.log(res)
            // check if post was successful
            if (res.status === 201)
            {
                // return to home page
                history.push('/');
            }
        }).catch((error) =>
        {
            console.log(error.message);
        })
    }

    return (
        <form className="create-form">
            <div>
                <label htmlFor="newTitle">Title: </label>
                <input type="text" id="newTitle" value={title} placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="newAuthor">Author: </label>
                <input type="text" id="newAuthor" value={author} placeholder="Author" onChange={(e) => {setAuthor(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="newReleaseDate">Release Date: </label>
                <input type="text" id="newReleaseDate" value={releaseDate} placeholder="Release Date" onChange={(e) => {setReleaseDate(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="newImage">Image URL: </label>
                <input type="text" id="newImage" value={image} placeholder="Image URL" onChange={(e) => {setImage(e.target.value)}}/>
            </div>

            <input type="submit" value="Submit" onClick={(e) => newBook(e)}/>
        </form>
    )
}

export default withRouter(CreateBook);