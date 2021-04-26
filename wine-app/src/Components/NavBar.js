import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <NavLink exact to='/' className="nav" activeClassName="nav-selected">Home</NavLink>
            <NavLink to='/wines' className="nav" activeClassName="nav-selected">All Wines List</NavLink>
            <NavLink to='/new' className="nav" activeClassName="nav-selected">Create New Wine</NavLink>
            <span className="nav-side-margin"></span>
        </nav>
    )
}

export default NavBar