import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AllBooks from './pages/AllBooks'
import CreateBooks from './pages/CreateBooks'
import BookDetails from './pages/BookDetails'
import EditBook from './pages/EditBook';

function App() {
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          >
          </Route>
          <Route
            path='/allBooks'
            component={AllBooks}
          >
          </Route>
          <Route
            path="/create"
            component={CreateBooks}
          >
          </Route>
          <Route
          path="/book"
          component={BookDetails}
          >
          </Route>
          <Route
          path="/edit"
          component={EditBook}
          >

          </Route>
        </Switch>
    </Router>
  );
}

export default App;
