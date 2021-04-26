import './App.css';
import {Route} from 'react-router-dom'

import NavBar from './components/navBar'
import Home from './pages/home'
import allBooks from './pages/allBooks'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path = '/' render={() => <Home />} />
      <Route exact path = '/books' render={() => <allBooks />} />  
      
    </div>
  );
}

export default App;
