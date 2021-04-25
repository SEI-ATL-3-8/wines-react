import './Wines.css';
import axios from 'axios';
import env from 'react-dotenv';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';

export default function Wines() {
    const [wines, setWines] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getWines = async() => {
        try {
            const response = await axios.get(env.API_URL);
            setWines(response.data);
        }
        catch(error) {
            console.log(error);
        }


    }

    useEffect(() => {
        setLoaded(false);
        getWines();
    }, []);

    useEffect(() => {
        setLoaded(true);
    }, [wines])



    console.log(loaded, wines);
    return (
        <div className="container">
            {!loaded  ? 
                <Loader /> :
                <div className="row">
                    {wines.map(wine => (
                        <div className="col" key={wine.id}>
                            <Link className="card" to={`/wines/${wine.id}`}>
                                <h3>{wine.name}</h3>
                                <img src={wine.picture} alt={wine.name} />
                            </Link>
                        </div>
                    ))};
                </div>
            }
        </div>
    );
};