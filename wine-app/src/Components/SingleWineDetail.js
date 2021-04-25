import Buttons from './Buttons'

const SingleWineDetail = (props) => {
    return (
        <div>
            { props.singleType === 'view' && 
            <div className="wine-detail-box">
                <div className="wine-detail-image-box">
                    <img className="wine-detail-image" src={props.wineDetail.picture} alt={props.wineDetail.name} />
                </div>
                <div className="wine-detail-text-box">
                    <Buttons button={'toggleEdit'} onClick={props.triggerEdit} />

                    <p className="wine-detail-text"><span className="wine-detail-text-name">{props.wineDetail.name}</span></p>
                    <p className="wine-detail-text">Year: {props.wineDetail.year}</p>
                    <p className="wine-detail-text">Grapes: {props.wineDetail.grapes}</p>
                    <p className="wine-detail-text">Country: {props.wineDetail.country}</p>
                    <p className="wine-detail-text">Region: {props.wineDetail.region}</p>
                    <p className="wine-detail-text">Price: ${props.wineDetail.price}</p>
                    <p className="wine-detail-text">Description: {props.wineDetail.description}</p>
                    
                    <Buttons button={'submitDelete'} activate={props.handleDelete} />
                </div>
            </div> 
            }

            { props.singleType === 'create' && 
            <div className="wine-detail-box">
                <div className="wine-detail-image-box">
                    <img className="wine-detail-image" src="https://atlas-content-cdn.pixelsquid.com/stock-images/pinot-noir-bottle-wine-z07MJn2-600.jpg" alt="new wine" />
                </div>
                <form className="wine-detail-form" onSubmit={props.handleSubmit}>
                    <p>Create a new wine!</p>
                    <label className="wine-detail-label">Name:</label>
                    <input className="wine-detail-input" placeholder="Name.." onChange={(e) => {props.setNewName(e.target.value)}} value={props.newName } />

                    <label className="wine-detail-label">Year:</label>
                    <input className="wine-detail-input" placeholder="Year.." onChange={(e) => {props.setNewYear(e.target.value)}} value={props.newYear } />

                    <label className="wine-detail-label">Grapes:</label>
                    <input className="wine-detail-input" placeholder="Grapes.." onChange={(e) => {props.setNewGrapes(e.target.value)}} value={props.newGrapes } />

                    <label className="wine-detail-label">Country:</label>
                    <input className="wine-detail-input" placeholder="Country.." onChange={(e) => {props.setNewCountry(e.target.value)}} value={props.newCountry } />

                    <label className="wine-detail-label">Region:</label>
                    <input className="wine-detail-input" placeholder="Region.." onChange={(e) => {props.setNewRegion(e.target.value)}} value={props.newRegion } />

                    <label className="wine-detail-label">Price:</label>
                    <input className="wine-detail-input" placeholder="Price.." onChange={(e) => {props.setNewPrice(e.target.value)}} value={props.newPrice } />

                    <label className="wine-detail-label">Description:</label>
                    <input className="wine-detail-input" placeholder="Description.." onChange={(e) => {props.setNewDescription(e.target.value)}} value={props.newDescription } />

                    <label className="wine-detail-label">Image URL:</label>
                    <input className="wine-detail-input" placeholder="Image URL.." onChange={(e) => {props.setNewImage(e.target.value)}} value={props.newImage } />

                    <Buttons button={props.button} />
                </form>
            </div> 
            }

            { props.singleType === 'edit' && 
            <div className="wine-detail-box">
                <div className="wine-detail-image-box">
                    <img className="wine-detail-image" src={props.wineDetail.picture} alt={props.wineDetail.name} />
                </div>
                <form className="wine-detail-form" onSubmit={props.handleEdit}>
                    <p>Edit the wine!</p>
                    <label className="wine-detail-label">Name:</label>
                    <input className="wine-detail-input" placeholder={props.wineDetail.name} onChange={(e) => {props.setEditName(e.target.value)}} value={props.editName } />

                    <label className="wine-detail-label">Year:</label>
                    <input className="wine-detail-input" placeholder={props.wineDetail.year} onChange={(e) => {props.setEditYear(e.target.value)}} value={props.editYear } />

                    <label className="wine-detail-label">Grapes:</label>
                    <input className="wine-detail-input" placeholder={props.wineDetail.grapes} onChange={(e) => {props.setEditGrapes(e.target.value)}} value={props.editGrapes } />

                    <label className="wine-detail-label">Country:</label>
                    <input className="wine-detail-input" placeholder={props.wineDetail.country} onChange={(e) => {props.setEditCountry(e.target.value)}} value={props.editCountry } />

                    <label className="wine-detail-label">Region:</label>
                    <input className="wine-detail-input" placeholder={props.wineDetail.region} onChange={(e) => {props.setEditRegion(e.target.value)}} value={props.editRegion } />

                    <label className="wine-detail-label">Price:</label>
                    <input className="wine-detail-input" placeholder={props.wineDetail.price} onChange={(e) => {props.setEditPrice(e.target.value)}} value={props.editPrice } />

                    <label className="wine-detail-label">Description:</label>
                    <input className="wine-detail-input" placeholder={props.wineDetail.description} onChange={(e) => {props.setEditDescription(e.target.value)}} value={props.editDescription } />

                    <label className="wine-detail-label">Image URL:</label>
                    <input className="wine-detail-input" placeholder={props.wineDetail.picture} onChange={(e) => {props.setEditImage(e.target.value)}} value={props.editImage } />

                    <Buttons button={'submitEdit'} />
                </form>
            </div> 
            }
        </div>       
    )
}

export default SingleWineDetail