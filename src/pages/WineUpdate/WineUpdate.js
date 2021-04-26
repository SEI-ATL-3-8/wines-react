

import env from 'react-dotenv';

import { useHistory,useParams } from 'react-router-dom';
import axios from 'axios';
import WineForm from '../../components/Form/WineForm';

export default function WineUpdate() {
    
    const {id} = useParams()

    const history = useHistory();


    const handleSubmit = async (event,formParams) => {
        event.preventDefault(); 
        try {
            const copyFormParams = {};

            for (const prop in formParams) {
                if (formParams[prop] !== '') copyFormParams[prop] = formParams[prop];
            }

            const response = await axios.put(`${env.API_URL}/${id}`, copyFormParams);

            history.push(`/wines/${id}`);
        }
        catch(error) {
            console.log(error);
        }

    }


   

    return (
        <div className="container wine-form-section">
            <h1 className="title">Update A Wine</h1>
            
            <WineForm handleSubmit={handleSubmit} buttonName="Update" />
        </div>
    )
}