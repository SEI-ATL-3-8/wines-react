import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link 
                to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link 
                to="/AllWines">
                    All Wines
                </Link>
            </li>
            <li>
                <Link 
                to="/CreateWine">
                    Create Wine
                </Link>
            </li>
        </ul>
    )
}

export default Navbar