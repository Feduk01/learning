import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../../redux/books/actionCreators'
import './BookList.css'

function BookList() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books stored in the list</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
                {`${index + 1}. ${book.title} by ${book.author} ${
                  book.year ? `(${book.year})` : ''
                }`}
              </div>
              <div className="book-actions">
                <button onClick={() => handleDelete(book.id)}>
                  Delete Book
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
