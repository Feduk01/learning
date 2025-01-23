import { v4 as uuidv4 } from 'uuid'
const createBookWithId = (book, source) => ({
  ...book,
  id: uuidv4(),
  source,
  isFavorite: false,
})

export default createBookWithId
