import React from 'react'
import './BookList.css'
import { useSelector } from 'react-redux'

function BookList() {
  const books = useSelector((state) => state.books)
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books stored in the list</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <div className="book-info">
                {++index}. {book.title} by <strong>{book.author}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
