import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <Link to ='/'>Home</Link>{`  |  `}
            <Link to ='/books'>All Books</Link>{`  |  `}
            <Link to ='/create'>Create a New Book</Link>
        </div>
    )
}

export default NavBar