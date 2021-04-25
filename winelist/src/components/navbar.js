
import { Link } from "react-router-dom";

const NavBar = () => {
  return(
<div>
    <nav>
        <Link to="/allbooks">All Books</Link>
        <Link to="/createbooks">Create Books</Link>
      </nav>
  </div>

  )


}

export default NavBar;


