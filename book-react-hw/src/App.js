import './App.css';
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import AllBook from './pages/AllBook'
import CreateBook from './pages/CreateBook';
import SingleBook from './components/SingleBook';
import EditBook from './components/EditBook';

// console.log(env) This is to check env


function App() {
  return (
    <div className="App">
     <Navbar />

     <Route 
      path = "/"
      exact
      render = { () => 
        <Home />
      }
     />

     <Route 
      path="/books"
      exact
      render = { () =>
        <AllBook />
      }
     />

     <Route 
      path="/createBooks"
      render = { () =>
        <CreateBook />
      }
     />

      <Route
        exact
        path="/books/:id">
          <SingleBook />
      </Route>    

      <Route
        path="/books/:id/edit"
        >
          <EditBook />
      </Route>
    </div>
  );
}

export default App;
