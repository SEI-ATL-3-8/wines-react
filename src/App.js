
import { Fragment } from 'react';
import env from 'react-dotenv';

import './App.css';
import Navbar from './headers/Navbar';

function App() {
  // env.API_URL
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}

export default App;
