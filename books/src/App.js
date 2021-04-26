import { Route, Redirect, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import New from './pages/New'
import Index from './pages/Index'
import Show from './pages/Show'
import Edit from './pages/Edit'

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Route
        path="/"
        exact
        render={() => {
          return <Redirect to="/home" />
        }}
      />

      <Route
        path="/home"
        render={() => {
          return <Home />
        }}
      />

      <Route
        path="/new"
        render={() => {
          return <New />
        }}
      />

      <Route
        path="/index"
        render={() => {
          return <Index />
        }}
      />

      <Route
        path="/show/:id"
        render={(routeInfo) => {
          // console.log(routeInfo);
          // return <Show id={routeInfo.match.params.id} />
          return <Show />
        }}
      />

      <Route
        path="/edit/:id"
        render={() => {
          return <Edit />
        }}
      />
    </div>
  );
}

export default App;
