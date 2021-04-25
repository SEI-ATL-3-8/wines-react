import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';
import { Redirect } from 'react-router-dom'

const Book = (props) => {
    const[BookInfo, setBookInfo] = useState([])
    const[status, setStatus] = useState(0)


    const handleInfo = () => {
        let arr = []
        arr.push(`Title: ${props.title}`, `Author: ${props.author}`, `Release Date: ${props.release_date} ` )
        if(props.title !== undefined ){
            setBookInfo(arr)
        }
    }

    const handleDelete = async () => {
        const res = await axios.delete(`${props.url}/${props.id}`)
        console.log(res);
        if(res.status === 200){
            setStatus(200)
        }
    }

    useEffect(() => {setStatus(0)},[])
    useEffect(()=>{handleInfo()},[props])

    render() 
    if(status === 200){
        return <Redirect to= {`/books`} />
    }

    return(
        <div>
            <div className = 'singleBook'>
                <div>
                    <img src = {props.image} />
                </div>

                <div className = 'info'> 
                    {BookInfo.map((book, i) => (
                    <div key = {i}>{book}</div>
                    ))}
                </div>

            </div>

            <div className = 'buttons'>
                <button > <Link to= {`/edit/${props.id}`}>Edit Book</Link> </button>
                <button onClick={()=>{handleDelete()}}>Delete</button>
            </div>


        </div>

    
    )
}

export default Book