import './App.css';
import {Route, Link} from 'react-router-dom'


import Home from './pages/Home'
import SingleBook from './pages/SingleBook'
import AddBook from './pages/AddBook'
import UpdateBook from './pages/UpdateBook'
import AllBooks from './pages/AllBooks'



function App() {
  return (
    <div className="navBar"> 
    <Link to = '/'>HOME</Link>{' | '}
    <Link to = '/allbooks'>BOOK COLLECTION</Link>{' | '}
    <Link to = '/addbook'>ADD BOOK</Link>

    <Route exact path = '/'>
      <Home />
    </Route>
    
    {/* <Route exact path = '/allbooks' component = {AllBooks} /> */}
    <Route exact path = '/allbooks' render = {() => {
      return <AllBooks component = {AllBooks} />
    }} />

    <Route path = '/allbooks/:id' render = {(routingInfo) => {
      return <SingleBook id = {routingInfo.match.params.id} />
    }} />

    <Route path = '/addbook'  >
      <AddBook />
      </Route>

    <Route path = '/updatebook/:id' render = {(routingInfo) => {
      return <UpdateBook id = {routingInfo.match.params.id} />
    }}/>

    </div>
  );
}

export default App;
