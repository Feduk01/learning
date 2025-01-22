import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/slices/booksSlice.js'
import booksData from '../../data/books.json'
import createBookWithId from '../../utils/createBookWithId.js'
import './BookForm.css'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author })))
      setTitle('')
      setAuthor('')
    }
  }

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    dispatch(addBook(createBookWithId(randomBook)))
  }

  const handleAddRandomBookViaAPI = async () => {
    try {
      const res = await axios.get('http://localhost:4000/random-book')
      if (res?.data?.title && res?.data?.author) {
        dispatch(addBook(createBookWithId(res.data)))
      }
      console.log(res)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button onClick={handleAddRandomBookViaAPI}>
          Add Random Book via API
        </button>
      </form>
    </div>
  )
}

export default BookForm
