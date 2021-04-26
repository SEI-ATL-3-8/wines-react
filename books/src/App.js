import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import env from 'react-dotenv';

import Home from './components/pages/Home';
import AllBooks from './components/pages/AllBooks';
import Book from './components/Book';
import CreateBook from './components/pages/CreateBook';

function App() {
  const [allBooks, setAllBooks] = useState([]);

  const getAllBooks = () =>
  {
    // grab all books from api and set them into all books state
    axios.get(env.API_URL).then((res) =>
    {
      // console.log(res);
      setAllBooks(res.data)
    }).catch((error) =>
    {
      console.log(error.message);
    })

  }
  useEffect(getAllBooks, []);

  return (
    <div className="App">
      <Link to="/">Home</Link>{' | '}
      <Link to="/books">All Books</Link>{ ' | '}
      <Link to="/create">Create A Book</Link>

      <Route exact path="/" component={Home}/>
      <Route exact path="/books" render={() => {getAllBooks(); return <AllBooks allBooks={allBooks}/>}}/>
      <Route path="/books/:id" render={(props) => {
        // console.log(props);
        const book = allBooks.find(book => book.id.toString() === props.match.params.id);
        return <Book {...book}/>;
      }}/>
      <Route path="/create" component={CreateBook}/>
    </div>
  );
}

export default App;
