import './App.css';
import{useState} from 'react'
import {Router, Route} from 'react-router-dom'
import Navbar from './header'
import Homepage from './componet/homepage'
import Allbook from './componet/allbooks'
import Createbook from './componet/createbooks'
import Singlebook from './componet/singlebooks'
import Editbook from './componet/editbook'

function App() {

  const [allbooks, setAllbooks] = useState([])
  const [singlebook, setSinglebook] = useState([])
  


  return (
    <div className="App">

      <Navbar/>
      <br/>
      <br/>
      <br/>
      <Route exact path = '/' render = {() => <Homepage />} />
      <Route exact path = '/books/edit' render = {() => <Editbook singlebook = {singlebook}/>} />
      <Route exact path = '/books' render = {() => <Allbook allbooks = {allbooks} setAllbooks = {setAllbooks}  setSinglebook = {setSinglebook}/>}/>
      <Route path = '/books/create' render = {() => <Createbook />}/>
      <Route exact path = '/books/singlebook' render = {() => <Singlebook allbooks = {allbooks} setAllbooks = {setAllbooks} singlebook = {singlebook}/>}/>


      
    </div>
  );
}

export default App;
