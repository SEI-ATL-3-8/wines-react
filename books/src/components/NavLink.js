import {Link} from 'react-router-dom'

const NavLink = () => {

  return (
    <div>
      <Link to = '/'>HomePage</Link> |
      <Link to = '/books'> AllBooks</Link> |
      <Link to = '/create'> CreateNew</Link>
    </div>
  )
}
export default NavLink