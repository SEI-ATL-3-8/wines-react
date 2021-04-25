import { render } from '@testing-library/react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import React, { useState , useEffect } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from '../form';

const CreateBook = (props) => {
    const[status, setStatus] = useState(0)
    const[Id, setId] = useState(0)

    
    const handleInfo = () => {
        props.setTitle('')
        props.setAuthor('')
        props.setDate('')
        props.setImage('')
    }
    
    
    const handleAdd = async () => {
        const res = await axios.post(props.url, {
            title: props.Title,
            author: props.Author,
            release_date: props.Date,
            image: props.Image
        })
        setId(res.data.id)
        props.getBooks()
        if(res.status === 201){
            setStatus(201)
        }
    }
    
    useEffect(() => {setStatus(0)},[])
    useEffect(()=>{handleInfo()},[])

    render() 
    if(status === 201){
        return <Redirect to= {`/book/${Id}`} />
    }
    
    return(
    
        <div className = 'create'>
            <h1>Create A New Book</h1>
            <Form Title = {props.Title} Author = {props.Author} Date = {props.Date} Image = {props.Image} setTitle = {props.setTitle} setAuthor = {props.setAuthor} setDate = {props.setDate} setImage = {props.setImage} />

            <button onClick={()=>{handleAdd()}}>Add Book!</button>            
        </div>
    )
}

export default CreateBook