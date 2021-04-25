import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import env from 'react-dotenv';
import axios from 'axios';
import './Wine.css';
import Loader from '../../components/Loader/Loader';
import { isCompositeComponent } from 'react-dom/test-utils';


export default function Wine () {

    const [wine, setWine] = useState({});
    const [loaded, setLoaded] = useState(false);


    const { id } = useParams();

    const getWine = async () => {
        console.log(env);
        setLoaded(false);
        const response = await axios.get(`${env.API_URL}/${id}`);
        setWine(response.data);
    };

    const convertTime = (zTime) => {
        const date = new Date(updated_at).toString();
        return date.split(' ').slice(0,4).join(' ');
    }


    
    useEffect( () => getWine(), []);
    
    useEffect( () => setLoaded(true), [ wine ]);

    const { name, description, picture, year, grapes, country, price, region, updated_at} = wine;
    console.log(wine);
    return(
    <div className="container">
        {loaded ? 
        <div className="wine-section">
            <h1 className="title">{name}</h1>
            <div className="card-overlay ">
                <img src={picture} alt={name} />
                <div className="description">
                    {description}
                </div>
               
            </div>
            <div className="info">
                <p>Year: {year}</p>     
                <p>Grapes: {grapes}</p>  
                <p>Country: {country}</p>
                <p>Price: ${price}</p>
                <p>Region: {region}</p>
                <p>Updated: {convertTime(updated_at)}</p>
            </div>
        </div>
        :
        <Loader />    
    }


    </div>)
}