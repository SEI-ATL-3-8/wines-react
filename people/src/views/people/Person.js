import axios from 'axios'
import env from 'react-dotenv'
import { useEffect, useState } from 'react'
import { useParams, Redirect } from 'react-router-dom'

function Person(props) {
    const [person, setPerson] = useState({})

    const [redirect, setRedirect] = useState(null)
    const params = useParams()

    const rightPerson = () => {
        const result = props.people.find(obj => {
            return obj.id == params.id
        })
        setPerson(result)
    }
    useEffect(rightPerson, [params.id])

    // const API = 'http://myapi-profstream.herokuapp.com/api/95678b/persons'
    const handleDelete = () => {
        const response = window.confirm('Are you sure you want to delete this person?')
        if(response) {
            axios.delete(`${env.API}/${params.id}`)
                .then(res => {
                    // console.log(res)
                    alert('Person deleted')
                    setRedirect('deleted')
                })
                .catch(error => console.error('Could not delete person', error))
        }
    }

    return (
        <div className="view singlePerson">

            {redirect === 'deleted' && <Redirect to={`/people/all`} />}
            {redirect === 'update' && <Redirect to={`/people/${params.id}/edit`} />}


            {person &&
                <>
                    <h1>Person Details</h1>
                    <div className="personContainer">
                        <p>First: {person.firstname}</p>
                        <p>Last: {person.lastname}</p>
                        <p>Email: {person.email}</p>
                        <p>Username: {person.username}</p>
                    </div>
                    <div className="btnsContainer">
                        <button className="btn editBtn"
                            onClick={() => {
                                setRedirect('update')
                            }}
                        >
                            Edit Person
                        </button>
                        <button className="btn deleteBtn"
                            onClick={handleDelete}
                        >
                            Delete Person
                        </button>
                    </div>
                </>
            }
        </div>
    )
}

export default Person