import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'



const Allbook = (props) =>{

    
    const getallbooks = () =>{

        axios.get ('http://myapi-profstream.herokuapp.com/api/323574/books').then
        ((response) =>{
            props.setAllbooks(response.data)
        })
    }
    useEffect(getallbooks, [])

    return(
        <div>
            <h1>Here are the books in the Library</h1>
        <div className = 'allbooks'>
                {
                    props.allbooks.map(books =>(
                        <li onClick = {() => {{props.setSinglebook(books)}}}>
                       <Link to = '/books/singlebook'>
                            {books.title}
                       </Link> 
                       </li>
                    ))
                }
        </div>

        </div>
    )
    

}
    
    export default Allbook