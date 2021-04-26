import logo from './logo.svg';
import './App.css';

import { Route, Link } from 'react-router-dom'
import Nav from './components/nav';
import Home from './pages/home'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Wine from './pages/wine'
import AddWine from './pages/addWine';

function App() {
  const [allWines, setAllWines] = useState([])

  const getAllWines = () => {
    axios.get('http://myapi-profstream.herokuapp.com/api/21a11f/wines').then(res => {
      setAllWines(res.data)
    })
  }

  useEffect(getAllWines, [])

  return (
    <div className="App">
      <Nav />

      {console.log(allWines)}
      <Route 
        path="/" 
        render={() => 
          <Home  
            allWines={allWines}
            setAllWines={setAllWines}
          />
          
        }
        exact
      />

      <Route
        path='/wine/:id'
        render={() => 
          <Wine allWines={allWines} setAllWines={setAllWines} />
        }
        exact
      />

      <Route 
        path='/createwine'
        render={() => 
          <AddWine
            setAllWines={setAllWines}
          />
        }
      />
    </div>
  );
}

export default App;
