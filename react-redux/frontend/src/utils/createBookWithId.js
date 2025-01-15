import { v4 as uuidv4 } from 'uuid'
const createBookWithId = (book) => ({
  ...book,
  id: uuidv4(),
  isFavorite: false,
})

export default createBookWithId
