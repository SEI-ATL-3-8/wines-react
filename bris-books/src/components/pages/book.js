import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

const Book = (props) => {
    const[BookInfo, setBookInfo] = useState([])
  

    const handleInfo = () => {
        let arr = []
        arr.push(`Title: ${props.title}`, `Author: ${props.author}`, `Release Date: ${props.release_date} ` )
        if(props.title !== undefined ){
            setBookInfo(arr)
        }
    }


    useEffect(()=>{handleInfo()},[props])

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
            </div>


        </div>

    
    )
}

export default Book