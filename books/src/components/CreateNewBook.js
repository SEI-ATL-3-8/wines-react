const CreateNewBook = () => {
  return (
    <div className='createBookHolder'>
      <h1>Hello from CreateNewBook</h1>
      <div className='formHolder'>
      <form>
        <input placeholder='Title'></input>
        <input placeholder='Author'></input>
        <input placeholder='Release Date'></input>
      </form>
      </div>
      <div className='buttonDiv'>
        <button>Create Book</button>
      </div>
    </div>
  )
}
export default CreateNewBook