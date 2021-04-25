import axios from 'axios'
import env from 'react-dotenv'
import { useState, useEffect } from 'react'
import SingleWineDetail from '../Components/SingleWineDetail'
import { Redirect } from 'react-router-dom'



const SingleWine = (props) => {

    const [wineDetail, setWineDetail] = useState([])
    const [deleteRedirect, setDeleteRedirect] = useState(null)

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

    return (

        

        <div className="wine-detail-container">

            { deleteRedirect && <Redirect to='/wines' /> }  


            <SingleWineDetail wineDetail={wineDetail} singleType={'view'} handleSubmit={handleDelete}/>
        </div>
    )
}



export default SingleWine