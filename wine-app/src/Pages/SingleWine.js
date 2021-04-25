import axios from 'axios'
import env from 'react-dotenv'
import { useState, useEffect } from 'react'
import SingleWineDetail from '../Components/SingleWineDetail'



const SingleWine = (props) => {

    const [wineDetail, setWineDetail] = useState([])

    const getWine = async () => {
        let response = await axios.get(`${env.API_URL}/${props.id}`)
        setWineDetail(response.data)
    }

    useEffect(() => {getWine()}, [])

    return (
        <div className="wine-detail-container">
            <SingleWineDetail wineDetail={wineDetail} />
        </div>
    )
}



export default SingleWine