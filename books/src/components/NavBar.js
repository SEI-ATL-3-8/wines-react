import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      {' | '}
      <Link to="/new">Create a New Book</Link>
      {' | '}
      <Link to="/index">All Books</Link>
    </nav>
  )
}

export default NavBar