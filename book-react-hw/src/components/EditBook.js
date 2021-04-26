import axios from 'axios'
import env from 'react-dotenv'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import SingleBook from './SingleBook'
import allBook from '../pages/AllBook'




const EditBook = (props) => {

    const { id } = useParams()
    const [currentBook, setCurrentBook] = useState({}) 
    //To get the current book

    const getCurrentBook = async () => {
        try {
           let response = await axios.get(`${env.BACKEND_URL}/books/${id}`)
                console.log(response)
                setCurrentBook(response.data)
        } catch (error) {
            console.log(error);
        } 
        }

        useEffect(()=>{
            getCurrentBook()
        },[])

        const edittedBookInfo ={
           title: "",
           author: "",
           date: "",
           img: ""
        }
        const [edittedBook, setEdittedBook] = useState(edittedBookInfo)
        //To add newly added book info

        const [letEdit, setLetEdit] = useState(false)
        //To allow to type new info 

        const handleChange = (e) => {
            const {name, value } = e.target
            setEdittedBook({
                ...edittedBook,
                [name]: value
            })
            setLetEdit(true)
        }



    const editBook = async () => {
        try {
            let response = await axios.put(`${env.BACKEND_URL}/books/${id}`, {
                title: edittedBook.title,
                author: edittedBook.author,
                release_date: edittedBook.release_date,
                image: edittedBook.image
            })
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('submit is clicked')
        editBook()
    }

    return(
        <div> 
            {letEdit ?
             <form className="createForm" onSubmit={handleSubmit}> 
             <input type="text" name="title" placeholder="Title" value={edittedBook.title} onChange={handleChange}></input>
            <input type="text" name="author"  placeholder="author name" value={edittedBook.author}onChange={handleChange}></input>
            <input type="text" name="date"  placeholder="Release Date" value={edittedBook.release_date} onChange={handleChange}></input >
            <input type="text" name="img"  placeholder="Image URL" value={edittedBook.image} onChange={handleChange}></input>
            <input type="submit" value="Edit"></input>
         </form>
        :
        
        
            <form className="createForm"> 
                  <input type="text" name="title" placeholder="Title" value={currentBook.title} onChange={handleChange}></input>
                 <input type="text" name="author"  placeholder="author name" value={currentBook.author} onChange={handleChange}></input>
                 <input type="text" name="date"  placeholder="Release Date" value={currentBook.release_date} onChange={handleChange}></input >
                 <input type="text" name="img"  placeholder="Image URL" value={currentBook.image} onChange={handleChange}></input>
                 <input type="submit" value="Edit"></input>
              </form>
        
        
        }
        </div>
    )
}

export default EditBook