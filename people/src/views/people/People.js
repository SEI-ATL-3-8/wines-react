import { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

function People(props) {
    const [redirect, setRedirect] = useState(null)

    useEffect(props.fetchPeople, [])
    
    return (
        <div className="view">

            {redirect ? <Redirect to={`/people/${redirect}`} /> : null}

            <h1>All People</h1>
            <Link to="/people/new">Create a Person</Link>
            {props.people.length === 0 ?
                'loading...'
            :
                <section className="peopleContainer">
                    {props.people.map(person => {
                        return(
                            <div className="personContainer"
                                key={person.id}
                                onClick={() => {
                                    setRedirect(person.id)
                                }}
                            >
                                <p>{person.firstname}</p>
                                <p>{person.lastname}</p>
                            </div>
                        )
                    })}
                </section>
            }
        </div>
    )
}

export default People