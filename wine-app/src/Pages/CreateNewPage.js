import SingleWineDetail from '../Components/SingleWineDetail'
import axios from 'axios'
import { useState } from 'react'
import env from 'react-dotenv'
import { Redirect } from 'react-router-dom'

const CreateNewPage = (props) => {

    const [newName, setNewName] = useState('')
    const [newYear, setNewYear] = useState('')
    const [newGrapes, setNewGrapes] = useState('')
    const [newCountry, setNewCountry] = useState('')
    const [newRegion, setNewRegion] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newImage, setNewImage] = useState('')

    const [redirectTo, setRedirectTo] = useState(null)

    const createNewWine = async () => {
        let response = await axios.post(`${env.API_URL}`, {
            name: newName,
            year: newYear,
            grapes: newGrapes,
            country: newCountry,
            region: newRegion,
            price: newPrice,
            description: newDescription,
            picture: newImage
        })
        setRedirectTo(response.data.id)
    }

    const handleCreate = (e) => {
        e.preventDefault()
        createNewWine()
        props.getAllWines()
    }

    return (
        <div className="wine-detail-container">

            { redirectTo && <Redirect to={`/wines/${redirectTo}`} /> }

            <SingleWineDetail 
                singleType={'create'}
                setNewName={setNewName}
                setNewYear={setNewYear}
                setNewGrapes={setNewGrapes}
                setNewCountry={setNewCountry}
                setNewRegion={setNewRegion}
                setNewPrice={setNewPrice}
                setNewDescription={setNewDescription}
                setNewImage={setNewImage}
                newName={newName}
                newYear={newYear}
                newGrapes={newGrapes}
                newCountry={newCountry}
                newRegion={newRegion}
                newPrice={newPrice}
                newDescription={newDescription}
                newImage={newImage}
                button={'submitNew'}
                handleSubmit={handleCreate}
            />
        </div>
    )
}

export default CreateNewPage