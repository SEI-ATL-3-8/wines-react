import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'
import {Link } from 'react-router-dom';


const AllBooksPage = (props) => {

    useEffect(() => {props.getBooks()}) 
    
    return(
        <div>
            <h1>All Books</h1>
            {props.AllBooks.map(book => (
                <div key = {book.id}>
                    <Link to= {`/book/${book.id}`}> {book.title} </Link>
                </div>
            ))}            
        </div>
    )
}

export default AllBooksPage