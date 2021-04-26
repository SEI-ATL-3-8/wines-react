import BookForm from '../components/BookForm'
import {useEffect } from 'react'


const CreateBooksPage = (props) => {

    return(
        <BookForm  createBook={props.createBook} getAllBooks={props.getAllBooks}/>
    )
}

export default CreateBooksPage