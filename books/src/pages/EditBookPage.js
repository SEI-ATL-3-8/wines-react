import EditBookForm from "../components/EditBookForm"

const EditBookPage = (props) => {
    
    return(
        <EditBookForm status={props.status} editRes={props.editRes} book={props.book} setBook={props.setBook} bookToEdit={props.bookToEdit}setBookToEdit={props.setBookToEdit} allBooks={props.allBooks} editBook={props.editBook} getAllBooks={props.getAllBooks}/>
    )
}

export default EditBookPage