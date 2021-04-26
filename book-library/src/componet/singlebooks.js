import axios from 'axios'
import {Link } from 'react-router-dom'


const Singlebook = (props) =>{
    return(
        <div className = 'singlebook'>
            <h1>Title:- {props.singlebook.title}</h1>
            <p>Author:- {props.singlebook.author}</p>
            <p>Year:- {props.singlebook.release_date}</p>
            <img src = {props.singlebook.image}/>
           
             <br/>
             <br/>
           <Link to = '/books'> <button onClick = {() =>(
                axios.delete (`http://myapi-profstream.herokuapp.com/api/323574/books/${props.singlebook.id}`).then
                ((response) =>{
                     console.log(response)
                })
            )} >Delete this book</button></Link>
                  <br/>
                  <br/>
            <Link to = '/books/edit'><button onClick = {() => (
                console.log('hello')
            )}>Edit Book</button></Link>  
        </div>
    )
}
    export default Singlebook