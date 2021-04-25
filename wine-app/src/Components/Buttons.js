



const Buttons = (props) => {
    return (
        <div>
            { props.button === 'submitNew' && 
                <input type="submit" value="Create New Wine" className="button" />
            }
            { props.button === 'toggleEdit' && 
                <input type="submit" value="Edit Wine" className="button" onClick={props.onClick} />
            }
            { props.button === 'submitEdit' && 
                <input type="submit" value="Submit Edits" className="button" />
            }
            { props.button === 'submitDelete' && 
                <input type="submit" value="Delete Wine" className="button" />
            }
        </div>
    )
}



export default Buttons