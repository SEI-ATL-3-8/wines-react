import { Link } from 'react-router-dom'


const Navbar = () =>{
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>{'   |   '}
                <Link to='/books'>View All Books</Link>{'   |   '}
                <Link to='/createBooks'>Create A New Book</Link>
            </nav>
        </header>
    )
}

export default Navbar
