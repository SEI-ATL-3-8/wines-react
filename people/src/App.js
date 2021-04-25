import './App.css';
import axios from 'axios'
import env from 'react-dotenv'
import { useState } from 'react'
import { Route } from 'react-router-dom'

import Nav from './partials/Nav'
import Home from './views/Home'
import People from './views/people/People'
import Person from './views/people/Person'
import Form from './views/people/Form'

function App() {
  const [people, setPeople] = useState([])

  // const API = 'http://myapi-profstream.herokuapp.com/api/95678b/persons'
  const fetchPeople = () => {
      console.log('fetching all people...');
      axios.get(`${env.API}`)
          .then(res => setPeople(res.data))
          .catch(error => console.error('Could not fetch people', error))
  }

  return (
    <div className="App">
      <Nav />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/people/all">
        <People 
          people = {people}
          fetchPeople = {fetchPeople}
        />
      </Route>

      <Route exact path="/people/:id">
        <Person 
          people = {people}
        />
      </Route>

      <Route exact path="/people/new">
        <Form />
      </Route>

      <Route exact path="/people/:id/edit">
        <Form 
          people = {people}
        />
      </Route>
    </div>
  );
}

export default App;
