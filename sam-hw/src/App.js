import './App.css';
import env from 'react-dotenv'
import axios from 'axios'
import { useEffect, useState} from 'react'


function App() {
  const [allBooks, setAllBooks] = useState([])

  const fetchAllBooks = () => {
    axios.get(`${env.API_URL}`)
      .then((response) => {
        console.log(response);
      })
  }

  useEffect(fetchAllBooks, [])

  return (
    <div className="App"> 

    </div>
  );
}

export default App;
