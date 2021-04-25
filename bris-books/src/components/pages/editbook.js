import React from 'react'
import { useState, useEffect } from 'react'
import { render } from '@testing-library/react';
import { Redirect } from 'react-router-dom'
import Form from '../form'
import axios from 'axios'

const EditBook = (props) => {
    const[status, setStatus] = useState(0)

    
    const handleInfo = () => {
        props.setTitle(props.title)
        props.setAuthor(props.author)
        props.setDate(props.release_date)
        props.setImage(props.image)
    }
    
    
    const handleEdit = async () => {
        const res = await axios.put(`${props.url}/${props.id}`,{
            title: props.Title,
            author: props.Author,
            release_date: props.Date,
            image: props.Image
        })
        props.getBooks()
        if(res.status === 201){
            setStatus(201)
        }
    }
    
    
    useEffect(() => {setStatus(0)},[])
    useEffect(()=>{handleInfo()},[])
    
    render() 
    if(status === 201){
        return <Redirect to= {`/book/${props.id}`} />
    }
    
    return(
        <div>
            <h1>EDIT {props.title} </h1>
            <Form Title = {props.Title} Author = {props.Author} Date = {props.Date} Image = {props.Image} setTitle = {props.setTitle} setAuthor = {props.setAuthor} setDate = {props.setDate} setImage = {props.setImage}/>
            <button onClick={()=>{handleEdit()}}>Edit</button>
        </div>
    )
    
}

export default EditBook