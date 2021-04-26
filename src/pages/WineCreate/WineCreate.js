import './WineCreate.css';

import env from 'react-dotenv';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function WineCreate() {
    const defaults = {
        name: "",
        year: "",
        grapes: "",
        country: "",
        region: "",
        description: "",
        picture: "",
        price: "",
    }

    const history = useHistory();

    const handleChange = event => {
        const { name, value} = event.target;

        

        setFormParams({
            ...formParams,
            [name]: value
        });
    }

    const handleSubmit = async event => {
        event.preventDefault(); 
        try {
            const response = await axios.post(env.API_URL, formParams);

            history.push(`/wines/${response.data.id}`);
        }
        catch(error) {
            console.log(error);
        }

    }


    const [formParams, setFormParams] = useState(defaults);

    return (
        <div className="container wine-section">
            <h1 className="title">Create A Wine</h1>
            <form onClick={handleSubmit} className="form-create-wine">
                <input onChange={handleChange} value={formParams.name} className="col-6" type="text" placeholder="Wine Name" name="name" />
                <input onChange={handleChange} value={formParams.year} className="col-6" type="number" placeholder="Year" name="year" />
                <input onChange={handleChange} value={formParams.grapes} className="col-6" type="text" placeholder="Grapes" name="grapes" />
                <input onChange={handleChange} value={formParams.country} className="col-6" type="text" placeholder="Country" name="country" />
                <input onChange={handleChange} value={formParams.region} className="col-6" type="text" placeholder="Region" name="region" />
                <input onChange={handleChange} value={formParams.description} className="col-6" type="text" placeholder="Description" name="description" />
                <input onChange={handleChange} value={formParams.picture} className="col-6" type="text" placeholder="Picture" name="picture" />
                <input onChange={handleChange} value={formParams.price} className="col-6" type="number" placeholder="Price" name="price" />
                <input type="submit" value="Create Wine" />
            </form>

        </div>
    )
}