import axios from 'axios'
import env from 'react-dotenv'
import { useState, useEffect } from 'react'
import SingleWineDetail from '../Components/SingleWineDetail'
import { Redirect } from 'react-router-dom'



const SingleWine = (props) => {

    const [wineDetail, setWineDetail] = useState([])
    const [deleteRedirect, setDeleteRedirect] = useState(null)
    const [editState, setEditState] = useState(null)
    const [editRedirect, setEditRedirect] = useState(null)

    const [editName, setEditName] = useState()
    const [editYear, setEditYear] = useState()
    const [editGrapes, setEditGrapes] = useState()
    const [editCountry, setEditCountry] = useState()
    const [editRegion, setEditRegion] = useState()
    const [editPrice, setEditPrice] = useState()
    const [editDescription, setEditDescription] = useState()
    const [editImage, setEditImage] = useState()



    const getWine = async () => {
        let response = await axios.get(`${env.API_URL}/${props.id}`)
        setWineDetail(response.data)
    }

    useEffect(() => {getWine()}, [])

    const handleDelete = async () => {
        let response = await axios.delete(`${env.API_URL}/${props.id}`)
        props.getAllWines()
        setDeleteRedirect(response.status)
    }

    const triggerEdit = (e) => {
        e.preventDefault()
        setEditState('active')
    }

    const handleEdit = async () => {
        let response = await axios.put(`${env.API_URL}/${props.id}`, {
            name: editName,
            year: editYear,
            grapes: editGrapes,
            country: editCountry,
            region: editRegion,
            price: editPrice,
            description: editDescription,
            picture: editImage        
        })
        console.log(response)
    }

    return (

        

        <div className="wine-detail-container">

            { editState === null && 
                <SingleWineDetail wineDetail={wineDetail} singleType={'view'} handleDelete={handleDelete} triggerEdit={triggerEdit} />
            }
            { editState === 'active' &&
                <SingleWineDetail 
                    wineDetail={wineDetail} 
                    singleType={'edit'} 
                    handleEdit={handleEdit}
                    setEditName={setEditName}
                    setEditYear={setEditYear}
                    setEditGrapes={setEditGrapes}
                    setEditCountry={setEditCountry}
                    setEditRegion={setEditRegion}
                    setEditPrice={setEditPrice}
                    setEditDescription={setEditDescription}
                    setEditImage={setEditImage}
                    editName={editName}
                    editYear={editYear}
                    editGrapes={editGrapes}
                    editCountry={editCountry}
                    editRegion={editRegion}
                    editPrice={editPrice}
                    editDescription={editDescription}
                    editImage={editImage} 
                
                /> 
            
            }
                   

            { deleteRedirect && <Redirect to='/wines' /> }  

            
        </div>
    )
}



export default SingleWine