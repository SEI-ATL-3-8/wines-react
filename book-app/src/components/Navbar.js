import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>{'  |  '}
                <Link to='/AllBook'>All Books</Link>{'  |  '}
                <Link to='/create'>Create a Book</Link>{'  |  '}
                <Link to='/SavedBook'>Saved Books</Link>
            </nav>
        </header>
    )
}

export default Navbar
