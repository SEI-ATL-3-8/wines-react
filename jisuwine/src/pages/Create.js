import axios from 'axios'
import { useEffect, useState } from 'react'

const Create = (props) => {

    const [newBook, setNewBook] = useState([])

    const fetchNewbook = () =>{
        axios.post('http://myapi-profstream.herokuapp.com/api/235b48/books',{
            title:title,
            author:author,
            release_data:release_date,
            image: image
        }).then((response)=>{

        })
    }

    }

    
    
    return(
        <div>
            hello from Create
        </div>
    )
}

export default Create