import { courses } from '../data/courses'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useEffect, useState } from 'react'

const SORT_KEYS = Array.from(
  new Set(courses.flatMap((course) => Object.keys(course)))
)
console.log('SORT_KEYS: ', SORT_KEYS)

const sortCourses = (courses, key) => {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
  }
  sortedCourses.sort((a, b) => (a[key] < b[key] ? -1 : 1))
  return sortedCourses
}

const Courses = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const parsed = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(parsed.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.', { relative: 'path' })
      setSortKey('')
      setSortedCourses([...courses])
    }
  }, [sortKey, navigate])

  console.log(location)
  console.log(parsed)
  console.log(sortKey)

  return (
    <>
      <h1>{sortKey ? `Sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <div className="courses-container" key={course.id}>
          <Link to={course.slug}>{course.title}</Link>
        </div>
      ))}
    </>
  )
}

export default Courses
