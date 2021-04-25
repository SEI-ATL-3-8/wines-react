import React from 'react'

const Form = (props) => {

    return(
        <div>
            <h4>Title:</h4>
            <input type = 'text' value={props.Title} onChange={(e) => { props.setTitle(e.target.value) }}/>
            <h4>Author:</h4>
            <input type = 'text' value={props.Author} onChange={(e) => { props.setAuthor(e.target.value) }}/>
            <h4>Release Date:</h4>
            <input type = 'text' value={props.Date} onChange={(e) => { props.setDate(e.target.value) }}/>
            <h4>Image Url:</h4>
            <input type = 'text' value={props.Image} onChange={(e) => { props.setImage(e.target.value) }}/>
        </div>
    )

}

export default Form