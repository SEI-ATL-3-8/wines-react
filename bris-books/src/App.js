import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { render } from '@testing-library/react';
import './App.css';
import NavBar from './components/navbar'
import Home from './components/pages/home'
import AllBooksPage from './components/pages/allbooks'
import CreateBook from './components/pages/createbook'
import EditBook from './components/pages/editbook'
import Book from './components/pages/book'

function App() {

  const apiUrl = 'http://myapi-profstream.herokuapp.com/api/f83d5a/books'

  const[AllBooks, setAllBooks] = useState([])
  const[Title, setTitle] = useState('')
  const[Author, setAuthor] = useState('')
  const[Date, setDate] = useState('')
  const[Image, setImage] = useState('')
  const[Id, setId] = useState(0)

  useEffect(() => {getBooks()},[])
  
  
  const getBooks = async () => {
    const res = await axios.get(apiUrl)
    setAllBooks(res.data)
    
  }


  
  return (
    <div className="App">
      <NavBar />
      <Route exact path = '/' render={()=> <Home />} />
      <Route path = '/books' render={() => <AllBooksPage AllBooks = {AllBooks} getBooks={getBooks} />} />
      <Route path = '/create' render={() => <CreateBook url = {apiUrl} getBooks={getBooks} Title = {Title} Author = {Author} Date = {Date} Image = {Image} setTitle = {setTitle} setAuthor = {setAuthor} setDate = {setDate} setImage = {setImage} />} />


      <Route path = '/edit/:id' render={(props) => {
        const book = AllBooks.find(book => book.id.toString() === props.match.params.id) 
        props = {...props, ...book} 
        return <EditBook {...props } Title = {Title} Author = {Author} Date = {Date} Image = {Image} setTitle = {setTitle} setAuthor = {setAuthor} setDate = {setDate} setImage = {setImage} url = {apiUrl} getBooks={getBooks}/>
        }}/>


      <Route path = '/book/:id' render={(props) => {
        const book = AllBooks.find(book => book.id.toString() === props.match.params.id) 
        props = {...props, ...book} 
        return <Book {...props } />
        }}/>
    </div>
  );
}

export default App;
