import { Link } from 'react-router-dom'

const navBar = () =>{
    return(
        <header>
        <nav>
            <Link to='/'>Home</Link>{'  |  '}
            <Link to='/books'>All Books</Link>{'  |  '}
            <Link to='/createBooks'>Create New Book</Link>{'  |  '}
        </nav>
        </header>
    )
}

export default navBar