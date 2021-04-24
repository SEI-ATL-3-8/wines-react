import { useEffect, useState} from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const SingleBook = (props) => {
    console.log('made it here', props);
    // console.log(props.id);
    const [oneBook, setOneBook] = useState({})
    // console.log(props.url);
    // console.log(env.API_URL);

    const fetchOneBook = () => {
        axios.get(`${env.API_URL}/${props.id}`)
        .then((response) => {
            // console.log(response);
            setOneBook(response.data)
        })
    }

    useEffect(fetchOneBook, [])

    return (
        <div className = 'singleBookContainer'>
            <h1>{oneBook.title}</h1>
            <h2>{oneBook.author}</h2>
            <p>{oneBook.release_date}</p>
            <img src = {oneBook.image} ></img>

            <div className = 'buttonContainer'>
                <button>Updated</button>
                <button>Delete</button>

            </div>
        </div>
    )

}

export default SingleBook;