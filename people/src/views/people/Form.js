import axios from 'axios'
import env from 'react-dotenv'
import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom' // do this!!

function Form(props) {
    const [person, setPerson] = useState({})
    const [type, setType] = useState('')
    const [redirect, setRedirect] = useState(null)
    const params = useParams()
    
    const rightPerson = () => {
        if(params.id) { // if coming from update btn
            const result = props.people.find(obj => {
                return obj.id == params.id
            })
            setPerson(result)
            setInputFirst(result.firstname)
            setInputLast(result.lastname)
            setInputEmail(result.email)
            setInputUN(result.username)
            setType('update')
        }
    }
    // console.log(person);
    const [inputFirst, setInputFirst] = useState('')
    const [inputLast, setInputLast] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputUN, setInputUN] = useState('')
    
    useEffect(rightPerson, [])

    // const API = 'http://myapi-profstream.herokuapp.com/api/95678b/persons'
    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (type === 'update') { // update person info
            axios.put(`${env.API}/${params.id}`, {
                firstname: inputFirst,
                lastname: inputLast,
                email: inputEmail,
                username: inputUN
            })
                .then(res => {
                    // console.log(res)
                    if(res.statusText === 'Created') {
                        alert(`Person ${inputFirst} ${inputLast} updated!`)
                        setRedirect(true)
                    }
                })
                .catch(error => console.error('Could not update person', error))
        } else { // create new person
            axios.post(`${env.API}`, {
                firstname: inputFirst,
                lastname: inputLast,
                email: inputEmail,
                username: inputUN
            })
                .then(res => {
                    // console.log(res)
                    if(res.statusText === 'Created') {
                        alert(`Person ${res.data.username} created!`)
                        setRedirect(true)
                    }
                })
                .catch(error => console.error('Could not create new person', error))
        }
    }

    return (
        <div className="view">

            {redirect && <Redirect to="/people/all" />}

            <h1>{type === 'update' ? 'Update Person' : 'Create a New Person'}</h1>
            <form className="personForm"  onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="firstname"
                    placeholder="First Name" 
                    value={inputFirst} 
                    onChange={e => setInputFirst(e.target.value)} 
                />

                <input 
                    type="text"
                    name="lastname"
                    placeholder="Last Name" 
                    value={inputLast} 
                    onChange={e => setInputLast(e.target.value)} 
                />

                <input 
                    type="text"
                    name="email"
                    placeholder="Email" 
                    value={inputEmail} 
                    onChange={e => setInputEmail(e.target.value)} 
                />

                <input 
                    type="text"
                    name="username"
                    placeholder="Username" 
                    value={inputUN} 
                    onChange={e => setInputUN(e.target.value)} 
                />


                <input className="btn" type="submit" />
            </form>
        </div>
    )
}

export default Form