import axios from 'axios';
import env from 'react-dotenv';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Book = (props) =>
{
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [image, setImage] = useState('');
    const [editing, setEditing] = useState(false);

    const history = useHistory();

    const editBook = (e) =>
    {
        e.preventDefault();
        // edit book details
        axios.put(`${env.API_URL}/${props.id}`, {
            title: title,
            author: author,
            release_date: releaseDate,
            image: image
        }).then((res) =>
        {
            setEditing(false);
            history.push(`/books/${props.id}`);
        }).catch((error) =>
        {
            console.log(error.message);
        })
    }

    const deleteBook = () =>
    {
        axios.delete(`${env.API_URL}/${props.id}`).then((res) =>
        {
            history.push('/books');
        }).catch((error) =>
        {
            console.log(error.message);
        })
    }

    return (
        <div>
            {editing ?
            <form className="edit-form">
                <div>
                    <label htmlFor="editTitle">Title: </label>
                    <input type="text" id="editTitle" value={title} placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="editAuthor">Author: </label>
                    <input type="text" id="editAuthor" value={author} placeholder="Author" onChange={(e) => {setAuthor(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="editReleaseDate">Release Date: </label>
                    <input type="text" id="editReleaseDate" value={releaseDate} placeholder="Release Date" onChange={(e) => {setReleaseDate(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="editImage">Image URL: </label>
                    <input type="text" id="editImage" value={image} placeholder="Image URL" onChange={(e) => {setImage(e.target.value)}}/>
                </div>

                <input type="submit" value="Submit" onClick={(e) => editBook(e)}/>
            </form>
            :
            <div>
                <h1>{props.title}</h1>
                <div></div>
                <img src={props.image} height="500px;"/>
                <div></div>
                <h3>{props.author}</h3>
                <div></div>
                <h4>{props.release_date}</h4>

                <div>
                    <button onClick={() => {
                        setTitle(props.title);
                        setAuthor(props.author);
                        setReleaseDate(props.release_date);
                        setImage(props.image);
                        setEditing(true);
                    }}>Edit</button>
                    <button onClick={deleteBook}>Delete</button>
                </div>
            </div>}
        </div>
    )
}

export default Book;