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
    const [updateParams, setUpdateParams] = useState({
        year: false,
        grapes: false,
        country: false,
        price: false,
        region: false,
        picture: false,
        update: false,
        name: false,
        description: false
    })

    const { id } = useParams();

    const getWine = async () => {
 
        setLoaded(false);
        const response = await axios.get(`${env.API_URL}/${id}`);
        setWine(response.data);
    };

    const convertTime = (zTime) => {
        const date = new Date(updated_at).toString();
        return date.split(' ').slice(0,4).join(' ');
    }

    const handleMouse = (event, name) => {
        const { type } = event;
        if ( type === "mouseenter") {
            const newUpdateParams = {...updateParams};
            for (const prop in newUpdateParams) {
                if (prop === name) newUpdateParams[prop] = true;
                else newUpdateParams[prop] = false;
            }
            setUpdateParams(newUpdateParams);

         
        }

        else {
            const newUpdateParams = {...updateParams};
            for (const prop in newUpdateParams) {
                newUpdateParams[prop] = false;
            }
          
            setUpdateParams(newUpdateParams);

            if (event.target.value !== '') {
                updateWine(name, event.target.value)
            }
        }
    }

    const updateWine = async (name,content) => {
        const response = await axios.put(`${env.API_URL}/${id}`, {[name]: content});
        getWine();
    }




    useEffect( () => getWine(), []);
    
    useEffect( () => setLoaded(true), [ wine ]);

    const { name, description, picture, year, grapes, country, price, region, updated_at} = wine;

    return(
    <div className="container">
        {loaded ? 
        <div className="wine-section">
            {!updateParams.name ? <h1 className="title" onMouseEnter={(e) => handleMouse(e,'name')}>{name}</h1> : <input className="input-name" placeholder="name" onMouseLeave={(e) => handleMouse(e,'picture')} type="text" />}
           
            <div className="card-overlay ">
            <img src={picture} alt={name} className="title" onMouseEnter={(e) => handleMouse(e,'picture') } /> 
            {updateParams.picture && <input className="input-picture" placeholder="picture" onMouseLeave={(e) => handleMouse(e,'picture')} type="text" />}
                <div className="description">
                    <p  onMouseEnter={(e) => handleMouse(e,'description')}>{description}</p>
                    {updateParams.description && <textarea rows="5" placeholder="description" onMouseLeave={(e) => handleMouse(e,'description')} />}
                </div>
               
            </div>
            <div className="info">
                {!updateParams.year ? <p onMouseEnter={(e) => handleMouse(e,'year')}>Year: {year}</p> : <input placeholder="year" onMouseLeave={(e) => handleMouse(e,'year')} type="text" />}     
                {!updateParams.grapes ? <p onMouseEnter={(e) => handleMouse(e,'grapes')}>Grapes: {grapes}</p> : <input  placeholder="grapes"  onMouseLeave={(e) => handleMouse(e,'grapes')} type="text" />}  
                {!updateParams.country ? <p onMouseEnter={(e) => handleMouse(e,'country')}>Country: {country}</p> : <input placeholder="country" onMouseLeave={(e) => handleMouse(e,'country')} type="text" />}
                {!updateParams.price ? <p onMouseEnter={(e) => handleMouse(e,'price')}>Price: ${price}</p> : <input placeholder="price" onMouseLeave={(e) => handleMouse(e,'price')} type="text" />}
                {!updateParams.region ? <p onMouseEnter={(e) => handleMouse(e,'region')}>Region: {region}</p> : <input placeholder="region" onMouseLeave={(e) => handleMouse(e,'region')} type="text" />}
                <p>Updated: {convertTime(updated_at)}</p>
            </div>
        </div>
        :
        <Loader />    
    }


    </div>)
}