
import { Fragment } from 'react';
import env from 'react-dotenv';
import { Route, Switch } from 'react-router';

import './App.css';
import Navbar from './headers/Navbar';
import Home from './pages/Home/Home';
import Wines from './pages/Wines/Wines';

function App() {
  // env.API_URL
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/wines">
          <Wines />
        </Route>

      </Switch>
    </Fragment>
  );
}

export default App;