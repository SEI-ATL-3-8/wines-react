import { Link, Route } from 'react-router-dom'
import './App.css';
import AllBooks from './components/AllBooks';
import CreateBook from './components/CreateBook';
import EditBook from './components/EditBook';
import Home from './components/Home';
import SingleBook from './components/SingleBook';

function App() {
  return (
    <div className="App">
      <nav className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/allbooks">All Books</Link>
        <Link to="/createbook">Create Book</Link>
      </nav>
      <Route exact
        path="/" render={() => <Home />} />
      <Route path="/allbooks" render={() => <AllBooks />} />
      <Route path="/createbook" render={() => <CreateBook />} />
      <Route path="/singlebook/:id" render={(props) => <SingleBook bookId={props.match.params.id} />} />
      <Route path="/editbook/:id" render={(props) => <EditBook bookId={props.match.params.id} />} />
    </div>
  );
}

export default App;
