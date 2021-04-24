import React from 'react'
import {useState} from 'react'
const Create = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        console.log(title, author)
    }

    return (
        <div>
           <form>
               <input type="text" placeholder="title" />
               <input type="text" placeholder="author" />
               <input type="text" placeholder="release-date" />
               <input type="submit" value="submit" />
           </form>
        </div>
    )
}

export default Create
