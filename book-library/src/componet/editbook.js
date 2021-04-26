import axios from 'axios'
import {useState, useEffect} from 'react'

const Editbook = (props) =>{

    const [title, setTitle] = useState([])
    const [author, setAuthor] = useState([])
    const [date, setDate] = useState([])
    const [url, setUrl] = useState([])


    // check if it is either create or edit, if it is create use one funtion, else use the other function, make both the link be direectred to the same page and just change the text on the top 


    const handleSubmit = (e) =>{
        e.preventDefault()

        
        axios.put (`http://myapi-profstream.herokuapp.com/api/323574/books/${props.singlebook.id}`, {
            title : title,
            author : author,
            release_date: date,
            image: url

        }).then
        ((response) =>{
            console.log(response)
        })

    }
return(
    <div className = 'editbook'>
        <h1> Edit:- {props.singlebook.title}</h1>
        <form className = "form" onSubmit = { handleSubmit}>
            <input type = "text" name =  "title" value = {title}
            placeholder = {props.singlebook.title} onChange = {(e) => {setTitle(e.target.value)}}/>

             <input type = "text" name =  "author" value = {author}
            placeholder = {props.singlebook.author} onChange = {(e) => {setAuthor(e.target.value)}}/>

            <input type = "text" name =  " date " value = {date}
            placeholder = {props.singlebook.release_date} onChange = {(e) => {setDate(e.target.value)}}/>

             <input type = "text" name =  "image" value = {url}
            placeholder = "change image" onChange = {(e) => {setUrl(e.target.value)}}/>

            <input type = "submit" value = "submit"/>
        </form>
    </div>
)
    }
    
    export default Editbook