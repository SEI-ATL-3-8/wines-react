import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <nav>
            <Link to='/'>Home</Link>{' | '}
            <Link to='/createwine'>Create Wine</Link>
        </nav>
    )
}

export default Nav