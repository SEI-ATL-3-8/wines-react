import axios from 'axios'
import { useState } from 'react'

const AddWine = props => {
    const [name, setName] = useState('')
    const [grapes, setGrapes] = useState('')
    const [year, setYear] = useState('')
    const [region, setRegion] = useState('')
    const [country, setCountry] = useState('')
    const [price, setPrice] = useState('')

    const addWine = e => {
        e.preventDefault()
        console.log(e.target.value);
        axios.post('http://myapi-profstream.herokuapp.com/api/21a11f/wines', {
            name: name,
            grapes: grapes,
            year: year,
            region: region,
            country: country,
            price: price
        }).then(res => {
            console.log(res);
        })
    }
    
    return(
        <div>
            <form onSubmit={addWine} >
                <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} required />
                <input type='text' placeholder='Grapes' value={grapes} onChange={e => setGrapes(e.target.value)} required />
                <input type='text' placeholder='Year' value={year} onChange={e => setYear(e.target.value)} required />
                <input type='text' placeholder='Region'  value={region} onChange={e => setRegion(e.target.value)} required />
                <input type='text' placeholder='Country' value={country} onChange={e => setCountry(e.target.value)} required />
                <input type='text' placeholder='Price' value={price} onChange={e => setPrice(e.target.value)} required />
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default AddWine