import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>{' | '}
            <Link to="/allwines">All Wines</Link>{' | '}
            <Link to="/create">Add Your Wine</Link>
        </nav>
    </header>
  )
}

export default Header