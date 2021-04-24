import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar'
import Home from './components/pages/home'
import AllBooksPage from './components/pages/allbooks'
import CreateBook from './components/pages/createbook'
import Book from './components/pages/book'

function App() {

  const apiUrl = 'http://myapi-profstream.herokuapp.com/api/f83d5a/books'

  const[AllBooks, setAllBooks] = useState([])


  const getBooks = async () => {
      const res = await axios.get(apiUrl)
      setAllBooks(res.data)
     
  }

  useEffect(() => {getBooks()},[])




  return (
    <div className="App">
      <NavBar />
      <Route exact path = '/' render={()=> <Home />} />
      <Route path = '/books' render={() => <AllBooksPage AllBooks = {AllBooks} getBooks={getBooks} />} />
      <Route path = '/create' render={() => <CreateBook url = {apiUrl} />} />
      <Route path = '/book/:id' render={(props) => {
        const book = AllBooks.find(book => book.id.toString() === props.match.params.id) 
        props = {...props, ...book} 
        return <Book {...props} />
        }}/>
    </div>
  );
}

export default App;
