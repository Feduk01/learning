import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  title: '',
  author: '',
  favorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // You can mutate state thank to Immer lib
      // state.title = action.payload
      return { ...state, title: action.payload }
    },
    resetFilters: () => {
      return initialState
    },

    setAuthorFilter: (state, action) => {
      return { ...state, author: action.payload }
    },

    setFavoriteFilter: (state) => {
      return { ...state, favorite: !state.favorite }
    },
  },
})

// same thing const setTitleFilter = filterSlice.actions.setTitleFilter
export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setFavoriteFilter,
} = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectFavoriteFilter = (state) => state.filter.favorite
// console.log(filterSlice.actions)
// console.log(filterSlice.actions.setTitleFilter('helloWorld'))

export default filterSlice.reducer
