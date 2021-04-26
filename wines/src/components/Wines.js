import { Link } from 'react-router-dom'

const Wines = (props) => {
    return (
      <div className="winesContainer">
           {props.allWines.length > 0 ?
        <ul>{props.allWines.map((wine) => {
            return (
              <li key={wine.id}>
                <Link to={`/allwines/${wine.id}`}>
                  {wine.name}
                </Link>
              </li>
            )
          })}</ul>
          :
          <p>Loading...</p>
        }
      </div>
    )
}

export default Wines

