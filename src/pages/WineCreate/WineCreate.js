import './WineCreate.css';

import env from 'react-dotenv';

import { useHistory } from 'react-router-dom';
import axios from 'axios';
import WineForm from '../../components/Form/WineForm';

export default function WineCreate() {
  

    const history = useHistory();


    const handleSubmit = async (event,formParams) => {
        event.preventDefault(); 
        try {
            const response = await axios.post(env.API_URL, formParams);

            history.push(`/wines/${response.data.id}`);
        }
        catch(error) {
            console.log(error);
        }

    }


   

    return (
        <div className="container wine-form-section">
            <h1 className="title">Create A Wine</h1>
            
            <WineForm handleSubmit={handleSubmit} buttonName="Create" />
        </div>
    )
}