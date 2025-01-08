import { courses } from '../data/courses'
import { Link, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useState } from 'react'

const sortCourses = (courses, key) => {
  const sortedCourses = [...courses]
  sortedCourses.sort((a, b) => (a[key] < b[key] ? -1 : 1))
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  const parsed = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(parsed.sort)
  const [sortedCourses, setSortedCourses] = useState()

  console.log(location)
  console.log(parsed)
  console.log(sortKey)
  console.log(sortCourses(courses, sortKey))

  return (
    <>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div className="courses-container" key={course.id}>
          <Link to={course.slug}>{course.title}</Link>
        </div>
      ))}
    </>
  )
}

export default Courses
