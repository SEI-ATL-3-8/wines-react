import { Redirect } from 'react-router-dom'
 import { useState } from 'react'
 import axios from 'axios'

 const EditWineForm = (props) => {
    const [name, setName] = useState([])
    const [year, setYear] = useState([])
    const [grapes, setGrapes] = useState([])
    const [country, setCountry] = useState([])
    const [region, setRegion] = useState([])
    const [description, setDescription] = useState([])
    const [url, setUrl] = useState([])
    const [price, setPrice] = useState([])

     const handleSubmit = (e) => {
         e.preventDefault()

     
      axios.put(`http://myapi-profstream.herokuapp.com/api/07238c/wines/${props.id}`, {
        name: name,
        year: year,
        grapes: grapes,
        country: country,
        region: region,
        description: description,
        image: url,
        price: price

           }).then((response) => {
        
       })
     }

     return (
            <div className = 'editForm'>
                <h1> Edit Wine</h1>
                <form className = "form" onSubmit = { handleSubmit}>
                <input type = "text" name =  "name" value = {name}
                    placeholder = " name " onChange = {(e) => {setName(e.target.value)}}/>
       
                     <input type = "text" name =  "year" value = {year}
                    placeholder = "year" onChange = {(e) => {setYear(e.target.value)}}/>

                    <input type = "text" name =  "grapes" value = {grapes}
                    placeholder = "grapes" onChange = {(e) => {setGrapes(e.target.value)}}/>
       
                    <input type = "text" name =  "country" value = {country}
                    placeholder = "country" onChange = {(e) => {setCountry(e.target.value)}}/>

                    <input type = "text" name =  "region" value = {region}
                    placeholder = "region" onChange = {(e) => {setRegion(e.target.value)}}/>

                    <input type = "text" name =  "description" value = {description}
                    placeholder = "description" onChange = {(e) => {setDescription(e.target.value)}}/>
       
                     <input type = "text" name =  "image" value = {url}
                    placeholder = "url" onChange = {(e) => {setUrl(e.target.value)}}/>

                    <input type = "text" name =  "price" value = {price}
                    placeholder = "price" onChange = {(e) => {setPrice(e.target.value)}}/>

                    <input type = "submit" value = "submit"/>
                </form>
            </div>
        )
        }
 export default EditWineForm