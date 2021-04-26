import axios from 'axios'
import env from 'react-dotenv'
import { Redirect } from 'react-router-dom' //Redirect!
import { useEffect, useState } from 'react'

const CreateBook = (props) => {

    const [shouldRedirect, setShouldRedirect] = useState(false)

       const newBookInfo = {
           title: "",
           author: "",
           date: "",
           img: ""
       }
       const [newBook, setNewBook] = useState(newBookInfo)


       const handleChange = (e) => {
           const {name, value} = e.target
           setNewBook({
               ...newBook,
               [name]: value
           })
       }

       const handleSubmit = (e) => {
           e.preventDefault()
           console.log('you clicked submit');
           console.log(newBook);
           postBook() //When submitted, Post it to backend api
           setShouldRedirect(true) 
       }


       const postBook = async () => {
           try {
               let response = await axios.post(`${env.BACKEND_URL}/books`,{
                title: newBook.title,
                author: newBook.author,
                release_date: newBook.date,
                image: newBook.img
               })
            //    console.log(response)
           } catch (error) {
               console.log(error);
           }
       }


    return(
        <div>
            {shouldRedirect ? 
             <Redirect to="/books" />
            :

            <div>
              <form className="createForm" onSubmit = {handleSubmit}> 
                  <input type="text" name="title" placeholder="Title" value={newBook.title} onChange={handleChange}></input>
                 <input type="text" name="author"  placeholder="author name" value={newBook.author} onChange={handleChange}></input>
                 <input type="text" name="date"  placeholder="Release Date" value={newBook.date} onChange={handleChange}></input >
                 <input type="text" name="img"  placeholder="Image URL" value={newBook.img} onChange={handleChange}></input>
                 <input type="submit" value="Create A New Book"></input>
              </form>
            </div>
        }
        </div>
    )

}

export default CreateBook