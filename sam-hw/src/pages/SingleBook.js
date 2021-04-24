import { useEffect, useState} from 'react'
import axios from 'axios'
// import React, {Component} from 'react'
import env from 'react-dotenv'
import {Route} from 'react-router-dom'

const SingleBook = (props) => {
    console.log('made it here', props);
    // console.log(props.id);
    const [oneBook, setOneBooks] = useState({})
    // console.log(props.url);
    // console.log(env.API_URL);

    const fetchOneBook = () => {
        axios.get(`${env.API_URL}/${props.id}`)
        .then((response) => {
            console.log('line 13', response);
        })
    }

    useEffect(fetchOneBook, [])

    return (
        <div>
            <h1>Single Book View</h1>
        </div>
    )

}

export default SingleBook;