import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import EditBook from './EditBook';

export default function BookDetails(props) {

    const history = useHistory();

    const deleteBook = async (e) => {
        e.preventDefault();
        try{
            let response = await axios.delete('http://myapi-profstream.herokuapp.com/api/148e86/books/' + props.location.state.id)
            history.push('/allBooks')
        }catch(error){
            console.log(error)
        }
    }

    const editBook = (e) => {
        e.preventDefault();
        history.push('/edit', props.location.state)
    }

    return (
        <div className='BookDetails'>
        <img src={props.location.state.image}></img>
        <div className='detail'>
            <div className='detailLabel'>Title:</div>
            {props.location.state.title}
        </div>
        <div className='detail'>
            <div className='detailLabel'>Author:</div>
            {props.location.state.author}
        </div>
        <div className='detail'>
            <div className='detailLabel'>Released:</div>
            {props.location.state.release_date}
        </div>
        <button onClick={(e)=>{deleteBook(e)}}>delete</button>
        <button onClick={(e)=>{editBook(e)}}>edit</button>
        </div>
    )
}
