import { useState } from 'react';

export default function WineForm ({handleSubmit, buttonName}) {

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


    const [formParams, setFormParams] = useState(defaults);

    
    const handleChange = event => {
        const { name, value} = event.target;

        

        setFormParams({
            ...formParams,
            [name]: value
        });
    }
    

    return (
        <form onSubmit={(e) => handleSubmit(e,formParams)} className="form-create-wine">
                <input onChange={handleChange} value={formParams.name} className="col-6" type="text" placeholder="Wine Name" name="name" />
                <input onChange={handleChange} value={formParams.year} className="col-6" type="number" placeholder="Year" name="year" />
                <input onChange={handleChange} value={formParams.grapes} className="col-6" type="text" placeholder="Grapes" name="grapes" />
                <input onChange={handleChange} value={formParams.country} className="col-6" type="text" placeholder="Country" name="country" />
                <input onChange={handleChange} value={formParams.region} className="col-6" type="text" placeholder="Region" name="region" />
                <input onChange={handleChange} value={formParams.description} className="col-6" type="text" placeholder="Description" name="description" />
                <input onChange={handleChange} value={formParams.picture} className="col-6" type="text" placeholder="Picture" name="picture" />
                <input onChange={handleChange} value={formParams.price} className="col-6" type="number" placeholder="Price" name="price" />
                <input type="submit" value={buttonName} />
        </form>
    );
} 