import axios from "axios"

const CreateWine = () => {
    const postWine = (e) => {
        console.log(e.target[0].value)
       axios.post('http://myapi-profstream.herokuapp.com/api/9d4029/wines',
        {
            name: e.target[0].value, 
            year:e.target[1].value, 
            grapes:e.target[2].value, 
            country:e.target[3].value,
            region:e.target[4].value,
            description:e.target[5].value,
            picture:e.target[6].value,
            price:e.target[7].value
            
        })
    }


    return (
        <form onSubmit={(e) => {e.preventDefault(); postWine(e)}}>
            <input placeholder="Name"/>
            <input placeholder="Year"/>
            <input placeholder="Grapes"/>
            <input placeholder="Country"/>
            <input placeholder="Region"/>
            <input placeholder="Description"/>
            <input placeholder="Picture"/>
            <input placeholder="Price"/>
            <input type="submit" />
        </form>
    )
}
export default CreateWine