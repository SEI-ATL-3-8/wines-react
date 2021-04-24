import './App.css';
import {Route, Link} from 'react-router-dom'
import axios from 'axios'
import env from 'react-dotenv'

import Home from './pages/Home'
import AllBooks from './pages/AllBooks'
import SingleBook from './pages/SingleBook'
import AddBook from './pages/AddBook'
import UpdateBook from './pages/UpdateBook'


function App() {

  const postBook = (book) => {
    axios.post(`${env.API_URL}`, book)
    .then((response) => {
      console.log(response);
    })
  }

  const putBook = (book) => {
    axios.put(`${env.API_URL}/:id`, book)
    .then((response) => {
      console.log(response);
    })
  }

  return (
    <div className="navBar"> 
    <Link to = '/'>HOME</Link>{' | '}
    <Link to = '/allbooks'>BOOK COLLECTION</Link>{' | '}
    <Link to = '/addbook'>ADD BOOK</Link>

    <Route exact path = '/'>
      <Home />
    </Route>
    
   
    <Route exact path = '/allbooks' component = {AllBooks} />
    <Route path = '/allbooks/:id' render = {(routingInfo) => {
      return <SingleBook id = {routingInfo.match.params.id} />
    }} />

    <Route path = '/addbook'  >
      <AddBook postBook = {postBook} />
      </Route>

    <Route path = '/updatebook/:id'>
      <UpdateBook putBook = {putBook} />
      </Route>  

    </div>
  );
}

export default App;
