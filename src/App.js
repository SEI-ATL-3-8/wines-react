
import { Fragment } from 'react';
import env from 'react-dotenv';
import { Route, Switch } from 'react-router';

import './App.css';
import Navbar from './headers/Navbar';
import Home from './pages/Home/Home';
import Wine from './pages/Wine/Wine';
import WineCreate from './pages/WineCreate/WineCreate';
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
        <Route exact path="/wines">
          <Wines />
        </Route>
        <Route path="/wines/:id">
          <Wine />
        </Route>

        <Route path="/create">
            <WineCreate />
        </Route>

      </Switch>
    </Fragment>
  );
}

export default App;
