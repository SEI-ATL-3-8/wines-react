import axios from 'axios'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'
import DisplayAllBooks from '../components/DisplayAllBooks'

const AllBooksPage = (props) => {
    



    return(
        <DisplayAllBooks getAllBooks={props.allBooks}/>
    )
}
export default AllBooksPage