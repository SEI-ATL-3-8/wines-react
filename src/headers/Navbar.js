import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="wine-title">
                        <h1>Wines</h1>
                        <FontAwesomeIcon icon={ faWineGlassAlt } className="brand-icon" />
                    </div>

                    <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/create">Create a Wine</Link></li>
                        <li><Link to="/wines">Wines</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};