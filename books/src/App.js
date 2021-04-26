import env from 'react-dotenv'
import axios from 'axios'
import './App.css';
import AllBooks from './components/AllBooks'
import CreateNewBook from './components/CreateNewBook'
import HomePage from './components/HomePage'
import NavLink from './components/NavLink'
import {Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Book from './components/Book'


function App() {
  const [books, setBooks] = useState([])
  

  const getAllBooks = () => {
    axios.get(`${env.BOOKS_API}`)
    .then((res) => {
      setBooks(res.data)
    })
  }
  useEffect(getAllBooks, [])

  return (
    <div className="App">
      <NavLink />
      <Route exact path='/' render={() => {
        return <HomePage />
      }}/>
      <Route exact path='/books' render={() => {
        return <AllBooks books={books} />
      }}/>
      <Route  path='/create' render={() => {
        return <CreateNewBook />
      }}/>
      <Route path='/books/:id' render={(routingProps) => {
        return <Book id={routingProps.match.params.id} />
      }}/>

    </div>
  );
}

export default App;
