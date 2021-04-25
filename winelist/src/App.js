import "./App.css";
import {Route, Switch} from 'react-router-dom'

import AllBooks from "./components/allBooks";
import NavBar from './components/navbar'
import Singlebooks from './components/singlebooks'
import CreateBooks from './components/createBooks'
import Editbooks from './components/editBooks'
import Home from './components/home'


function App() {

  return (
  <div className="App">
 <NavBar />
  <Switch> 
    <Route exact path = "/" render={() => <Home />} />
    <Route path = "/allbooks" render={() => <AllBooks />} />
    <Route path = '/book/:id' render={() => 
    <Singlebooks />} />
    <Route path = '/createbooks' render={() => 
    <CreateBooks />} />
    <Route path = '/edit/:id' render={() => 
    <Editbooks />} />
 
 </Switch>
    </div>
  );
}

  export default App;
