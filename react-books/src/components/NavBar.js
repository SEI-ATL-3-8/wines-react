import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='navlinks'>Home</Link>
            <Link to='/allBooks' className='navlinks'>All Books</Link>
            <Link to='/create' className='navlinks'>Create Book</Link>
        </div>
    )
}

export default NavBar;