import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useState , useEffect } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

const CreateBook = (props) => {
    const[Title, setTitle] = useState('')
    const[Author, setAuthor] = useState('')
    const[Date, setDate] = useState('')
    const[Image, setImage] = useState('')
    const[status, setStatus] = useState(0)

    useEffect(() => {setStatus(0)},[])
    render() 
    if(status === 201){
        return <Redirect to='/books' />
    }


    const handleAdd = async () => {
        const res = await axios.post(props.url, {
            title: Title,
            author: Author,
            release_date: Date,
            image: Image
        })
        if(res.status === 201){
            setStatus(201)
        }
    }


    return(
        <div className = 'create'>
            <h1>Create A New Book</h1>
            <h4>Title:</h4>
            <input type = 'text' value={Title} onChange={(e) => { setTitle(e.target.value) }}/>
            <h4>Author:</h4>
            <input type = 'text' value={Author} onChange={(e) => { setAuthor(e.target.value) }}/>
            <h4>Release Date:</h4>
            <input type = 'text' value={Date} onChange={(e) => { setDate(e.target.value) }}/>
            <h4>Image Url:</h4>
            <input type = 'text' value={Image} onChange={(e) => { setImage(e.target.value) }}/>
            <button onClick={()=>{handleAdd()}}>Add Book!</button>            
        </div>
    )
}

export default CreateBook