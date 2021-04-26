import React from 'react'
import {useState} from 'react'
const Create = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        console.log(title, author, date)
    }

    return (
        <div>
           <form onSubmit = {handleSubmit}>
               <input type="text" placeholder="title" value={title} onChange={
                   (e) => setTitle(e.target.value)
               }/>
               <input type="text" placeholder="author"  value={author} onChange={
                   (e) => setAuthor(e.target.value)
               } />
               <input type="text" placeholder="release-date" value={date} onChange={
                   (e) => setDate(e.target.value)
               } />
               <input type="submit" value="submit" />
           </form>
           <div>
            <h1>{title}</h1>
            <h1>{author}</h1>
            <h1>{date}</h1>
           </div>
        </div>
    )
}

export default Create
