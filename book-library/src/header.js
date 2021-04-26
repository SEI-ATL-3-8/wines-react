import {Link} from 'react-router-dom'

const Navbar = () =>{

    return(
        <div>
          <Link to = '/'className = "Navlink"> Home Page</Link>   
          {' | -- |'} {' -- | '}

          <Link to = '/books'className = "Navlink">  All Books</Link>
          {' | -- |'} {' -- | '}

          <Link to = '/books/create'className = "Navlink">  Create A New Book</Link>
        </div>


    )


} 
export default Navbar