import { configureStore } from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.5/+esm'
import reducer from './reducer.js'

const store = configureStore({
  reducer: reducer,
})

export default store
