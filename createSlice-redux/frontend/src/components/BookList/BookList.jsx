import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import {
  selectAuthorFilter,
  selectTitleFilter,
  selectFavoriteFilter,
} from '../../redux/slices/filterSlice'
import {
  deleteBook,
  toggleFavorite,
  selectBooks,
} from '../../redux/slices/booksSlice.js'
import './BookList.css'

function BookList() {
  const books = useSelector(selectBooks)
  console.log(books)

  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const favoriteFilter = useSelector(selectFavoriteFilter)

  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }

  const handlerToggleFavorit = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    const matchesFavorite = favoriteFilter ? book.isFavorite : true

    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const highlightMatch = (text, filter) => {
    if (!filter) return text
    const regex = new RegExp(`(${filter})`, 'gi')
    return text.split(regex).map((substring, index) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={index} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  const controlledBackground = (book) => {
    if (!book.source) {
      return { backgroundColor: '2px solid gray', color: 'gray' }
    }
    if (book.source === 'manual') {
      return { border: '2px solid green', color: 'green' }
    }
    if (book.source === 'random') {
      return { border: '2px solid violet', color: 'violet' }
    }
    if (book.source === 'API') {
      return { border: '2px solid #FFBF00', color: '#FFBF00' }
    }
    return { border: '2px solid gray', color: 'gray' }
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books stored in the list</p>
      ) : (
        <ul>
          {filteredBooks.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
                {index + 1}. {highlightMatch(book.title, titleFilter)} by{' '}
                <strong>{highlightMatch(book.author, authorFilter)}</strong>
                {book.year ? ` (${book.year})` : ''}
                <strong>
                  <span
                    style={{
                      borderRadius: '3px',
                      ...controlledBackground(book),
                      padding: '3px',
                      marginLeft: '5px',
                      fontSize: '15px',
                      textAlign: 'center',
                    }}>{` the source is ${book.source}`}</span>
                </strong>
              </div>
              <span onClick={() => handlerToggleFavorit(book.id)}>
                {book.isFavorite ? (
                  <BsBookmarkStarFill className="star-icon" />
                ) : (
                  <BsBookmarkStar className="star-icon" />
                )}
              </span>

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
