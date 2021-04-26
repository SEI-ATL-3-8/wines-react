import {Link} from 'react-router-dom'

const Navbar = (props) =>{
    return(
        <div>
        <Link to ='/wine'>All books</Link>
        {'  |    '}
        <Link to ='/'>Back to Home</Link>
        {'  |    '}
        <Link to ='/wine/create'>Create wine</Link>
        </div>
    )
}
export default Navbar