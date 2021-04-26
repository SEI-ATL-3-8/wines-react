import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Wine = props => {
    let { id } = useParams()

    return(
        <div>
            {props.allWines.map((item, i ) => (
                parseInt(id) === item.id ?
                    <div className="winePageSingle" key={i}>
                        <h1>{item.name}</h1>
                        <p>{item.year}</p>
                        <p>{item.grapes}</p>
                        <p>{item.country}</p>
                        <p>{item.price}</p>
                        <p>{item.region}</p>
                        <Link to='/'> 
                            <button onClick={() => {
                                axios.delete(`http://myapi-profstream.herokuapp.com/api/21a11f/wines/${item.id}`)
                            }}>
                            DELETE WINE</button>
                        </Link>

                    </div>
                :
                null
            ))}
        </div>
    )
}

export default Wine