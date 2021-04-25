import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import env from 'react-dotenv'

const SingleBook = (props) => {
    const [oneBook, setOneBook] = useState({})

    const fetchOneBook = () => {
        axios.get(`${env.API_URL}/${props.id}`)
        .then((response) => {
            // console.log(response);
            setOneBook(response.data)
        })
    }
    
    const deleteBook = async () => {
        const response = await axios.delete(`${env.API_URL}/${props.id}`)
        console.log(response);
    } 

    useEffect(fetchOneBook, [props.id])

    return (
        <div className = 'singleBookContainer'>
            <h1>{oneBook.title}</h1>
            <h2>{oneBook.author}</h2>
            <p>{oneBook.release_date}</p>
            <img src = {oneBook.image} alt= '' ></img>

            <div className = 'buttonContainer'>
                <Link to = {`/updatebook/${props.id}`}>
                    <button>UPDATE</button>
                </Link>
                <button onClick = {() => {deleteBook()}}>DELETE</button>

            </div>
        </div>
    )

}

export default SingleBook;