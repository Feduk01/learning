import * as actionTypes from './actionTypes.js'

export const addBook = (newBook) => ({
  type: actionTypes.ADD_BOOK,
  payload: newBook,
})

export const deleteBook = (id) => ({
  type: actionTypes.DELETE_BOOK,
  payload: id,
})
