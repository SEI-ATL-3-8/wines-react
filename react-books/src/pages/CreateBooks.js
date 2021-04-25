import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function CreateBooks() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();


    const submitCreate = async (e) =>{
        e.preventDefault();
        
        try{
            let response = await axios.post('http://myapi-profstream.herokuapp.com/api/148e86/books',
            {
                title: title,
                author: author,
                image: image,
                release_date: date
            })

            history.push('/allBooks')

        }catch(error){
            console.log(error);
        }


    }



    return (
        <div className='createForm'>
            <form>
                <input type='text' placeholder='title' value={title} onChange={(event) => setTitle(event.target.value)}></input>
                <input type='text' placeholder='author' onChange={(event) => setAuthor(event.target.value)}></input>
                <input type='text' placeholder='cover image url' onChange={(event) => setImage(event.target.value)}></input>
                <input type='text' placeholder='release date' onChange={(event) => setDate(event.target.value)}></input>
                <button onClick={(e)=>submitCreate(e)}>create book</button>
            </form>
        </div>
    )
}