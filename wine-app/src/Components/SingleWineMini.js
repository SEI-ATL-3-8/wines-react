



const SingleWineMini = (props) => {
    return (
        <div className="wine-container">
            {props.allWines.map((wine) => (
                <div key={wine.id} className="wine-mini-box">
                    <span className="wine-mini-name">{wine.name}</span>
                </div>
            ))}
        </div>
    )
}



export default SingleWineMini