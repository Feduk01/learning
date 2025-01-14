import * as actionTypes from './actionTypes.js'

export const addBook = (newBook) => ({
  type: actionTypes.ADD_BOOK,
  payload: newBook,
})

// const deleteBook = (book) => ({
//     type: actionTypes.DELETE_BOOK,
//     payload:
// })
