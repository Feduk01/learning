import * as actionTypes from './actionTypes'
const initialState = []

export function booksReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload]

    case actionTypes.DELETE_BOOK:
      return state.filter((chosenBook) => chosenBook !== action.payload)
    default:
      return state
  }
}
