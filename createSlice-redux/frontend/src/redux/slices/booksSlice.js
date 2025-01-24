import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '../../utils/createBookWithId'
import { setError } from './errorSlice'

const initialState = []

export const fetchBook = createAsyncThunk(
  'book/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      throw error
    }
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      return [...state, action.payload]
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
    },
    toggleFavorite: (state, action) => {
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      )
    },
    clearBooks: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithId(action.payload, 'API'))
      }
    })
  },
})

export const { addBook, deleteBook, toggleFavorite, clearBooks } =
  booksSlice.actions
// Previous fetching before createAsyncThunk
// export const thunkFunction = async (dispatch, getState) => {
//   try {
//     const res = await axios.get('http://localhost:4000/random-book')
//     if (res?.data?.title && res?.data?.author) {
//       dispatch(addBook(createBookWithId(res.data, 'API')))
//     }
//     console.log(res)
//   } catch (error) {
//     console.log(error.message)
//   }
// }

export const selectBooks = (state) => state.books

export default booksSlice.reducer
