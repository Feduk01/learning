import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import NotFound from './NotFound'
function Course() {
  const params = useParams()
  const course = courses.find((course) => course.slug === params.slug)
  if (!course) {
    return <NotFound />
  }
  return (
    <section className="course-container">
      <h1>{course.title}</h1>
      <h2>{course.slug}</h2>
      <button>
        <Link to=".." relative="path">
          All courses
        </Link>
      </button>
    </section>
  )
}

export default Course
