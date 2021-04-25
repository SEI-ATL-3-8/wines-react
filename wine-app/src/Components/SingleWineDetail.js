

const SingleWineDetail = (props) => {
    return (
            <div className="wine-detail-box">
                <div className="wine-detail-image-box">
                    <img className="wine-detail-image" src={props.wineDetail.picture} alt={props.wineDetail.name} />
                </div>
                <div className="wine-detail-text-box">
                    <p className="wine-detail-text"><span className="wine-detail-text-name">{props.wineDetail.name}</span></p>
                    <p className="wine-detail-text">Year: {props.wineDetail.year}</p>
                    <p className="wine-detail-text">Grapes: {props.wineDetail.grapes}</p>
                    <p className="wine-detail-text">Country: {props.wineDetail.country}</p>
                    <p className="wine-detail-text">Region: {props.wineDetail.region}</p>
                    <p className="wine-detail-text">Price: ${props.wineDetail.price}</p>
                    <p className="wine-detail-text">Description: {props.wineDetail.description}</p>
                </div>
            </div>    
    )
}




export default SingleWineDetail