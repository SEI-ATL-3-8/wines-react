import Nav from '../components/nav'
import { Link } from 'react-router-dom'

const Home = props => {
    return(
        <div className="wineContainer">
            {props.allWines.map((item, i) => (   
                    <Link to={`/wine/${item.id}`} className="wineDiv" key={i}>
                        {item.name}<br />
                        {item.year}<br />
                        {item.grapes}<br />
                        {item.country}<br />
                        {item.price}<br />
                        {item.region}<br />
                    </Link>
            ))}
        </div>
    )
}

export default Home