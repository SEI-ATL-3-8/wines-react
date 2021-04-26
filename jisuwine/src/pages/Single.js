import {Link} from 'react-router-dom'
import axios from 'axios'
import{useState,useEffect} from 'react'

const Singlewine = (props) =>{
    const [oneWind, setOndWine] =useState({})

    const fetchoneBook = () => {
        axios.get(`http://myapi-profstream.herokuapp.com/api/235b48/books/${props.id}`)
        .then((response)=>{
            setOndWine(response.data);
            console.log(response.data);
        })
    }
    useEffect(fetchoneBook, [])


    return(
        <div>
             
            
            {oneWind === undefined ?
            <p>Loading ........ Wait for the Data!</p>

            :
            <div className='singlebookBox'>
            {oneWind.title}
            {'       |      '}
            {oneWind.author}
            {'       |      '}
            {oneWind.release_date}
            {'       |      '}
            {oneWind.image}
            
            </div>
            
            }
            
            
           
        </div>
    )
}

export default Singlewine