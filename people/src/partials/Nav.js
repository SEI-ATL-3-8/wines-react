import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navBar">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/people/all">People</Link></span>
            <span><Link to="/people/new">Create Person</Link></span>
        </nav>
    )
}

export default Nav