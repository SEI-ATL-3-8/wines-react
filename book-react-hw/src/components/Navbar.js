import { Link } from 'react-router-dom'


const Navbar = () =>{
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>{'   |   '}
                <Link to='/books'>All Books</Link>{'   |   '}
                <Link to='/createBooks'>Creat A New Book</Link>
            </nav>
        </header>
    )
}

export default Navbar