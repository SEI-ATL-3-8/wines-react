import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function EditBook(props) {

    const history = useHistory();

    const [title, setTitle] = useState(props.location.state.title);
    const [author, setAuthor] = useState(props.location.state.author);
    const [image, setImage] = useState(props.location.state.image);
    const [date, setDate] = useState(props.location.state.release_date);

    const submitEdit = async (e) => {
        e.preventDefault();
        try{
            let response = await axios.put('http://myapi-profstream.herokuapp.com/api/148e86/books/'+props.location.state.id,
            {
                title: title,
                author: author,
                image: image,
                release_date: date
            })

            console.log(response)

            history.push('/book', props.location.state)

        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className='editForm'>
            <form>
                <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}></input>
                <input type='text' value={author} onChange={(event) => setAuthor(event.target.value)}></input>
                <input type='text' value={image} onChange={(event) => setImage(event.target.value)}></input>
                <input type='text' value={date} onChange={(event) => setDate(event.target.value)}></input>
                <button onClick={(e)=>submitEdit(e)}>update book</button>
            </form>
        </div>
    )
}
