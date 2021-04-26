
import { useState, useEffect } from 'react'
import { Route, useParams} from 'react-router-dom'

import env from "react-dotenv";

import './App.css';
import Nav from './components/nav'
import AllBooksPage from './pages/AllBooksPage'
import HomePage from './pages/HomePage'
import CreateBooksPage from './pages/CreateBooksPage'
import SingleBook from './pages/SingleBook'
import axios from 'axios';
import EditBookPage from './pages/EditBookPage';


function App() {
  const [allBooks, setAllBooks] = useState([])

  const [bookToEdit, setBookToEdit] = useState("book")
  const [status, setStatus] = useState(0)



  const getAllBooks = async () => {
    try{
    let res = await axios.get(`${env.BACKEND_URL}`)
    setAllBooks(res.data)
    }catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { getAllBooks() }, [])

  const deleteBook = async (id) => {
    try {
      let res = await axios.delete(`${env.BACKEND_URL}/${id}`)
      getAllBooks()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      
      <Nav />
      <Route exact path='/' render={() => { return <HomePage /> }} />
      <Route exact path='/books' render={() => { return <AllBooksPage setAllBooks={setAllBooks} allBooks={allBooks} /> }} />
      <Route path='/books/create' render={() => { return <CreateBooksPage getAllBooks={getAllBooks}/> }} />
      <Route exact path='/books/:id'>
        <SingleBook setBookToEdit={setBookToEdit} allBooks={allBooks} deleteBook={deleteBook}/>
      </Route>
      <Route exact path='/books/:id/edit'>
        <EditBookPage  status={status}bookToEdit={bookToEdit}setBookToEdit={setBookToEdit} allBooks={allBooks} 
    
        getAllBooks={getAllBooks}/>
      </Route>
    </div>
  );
}

export default App;
