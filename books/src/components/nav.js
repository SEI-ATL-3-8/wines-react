import { Link } from 'react-router-dom'
const Nav = (props) => {
    return(
        <nav>
            <Link to ="/">Home</Link>
            {"  |   "}
            <Link to="/books">All Books</Link>
            {"  |   "}
            <Link to="/books/create">
                Create a Book</Link>
        </nav>
    )
}
export default Nav