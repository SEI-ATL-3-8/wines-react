import { NavLink } from 'react-router-dom'



const SingleWineMini = (props) => {
    return (
        <div className="wine-container">
            {props.allWines.map((wine) => (
                <NavLink key={wine.id} exact to={`/wines/${wine.id}`}>
                    <div className="wine-mini-box">
                        <span className="wine-mini-name">{wine.name}</span>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}



export default SingleWineMini