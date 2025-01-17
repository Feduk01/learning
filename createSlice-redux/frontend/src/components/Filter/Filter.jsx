import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  selectAuthorFilter,
  setAuthorFilter,
  setFavoriteFilter,
  selectFavoriteFilter,
} from '../../redux/slices/filterSlice'
import './FIlter.css'

function Filter() {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const favoriteFilter = useSelector(selectFavoriteFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleFavoriteFilterChange = () => {
    dispatch(setFavoriteFilter())
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            type="text"
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            value={authorFilter}
            type="text"
            placeholder="Filter by author..."
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="checkbox">
            <input
              id="checkbox"
              checked={favoriteFilter}
              type="checkbox"
              onChange={handleFavoriteFilterChange}
            />
            Favorite Books
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Filter
