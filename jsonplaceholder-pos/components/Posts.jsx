import { useEffect, useState } from 'react'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const API_URL = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL)
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  // IIFE Immediately Invoked Function Expression
  useEffect(() => {
    ;(async function () {
      try {
        const res = await fetch(API_URL)
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    })()
  }, [])

  if (error) {
    return <h1>Error: {error}</h1> // exoposing error on page
  }

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1> // exoposing loading on page
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </div>
  )
}

export default Posts

// const [state, setState] = useState({ posts: [], error: '', isLoading: true })

// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json())
//     .then((data) => setState((prevState) => ({ ...prevState, posts: data })))
//     .catch((error) => setState((prevState) => ({ ...prevState, error }))) this syntaxis means that i return the object inside my arrow function ({})
//     .finally(() =>
//       setState((prevState) => ({ ...prevState, isLoading: false }))
//     )
// }, [])

// if (state.error) {
//   return <h1>Error: {state.error}</h1>
// }

// return (
//   <div className="posts-container">
//     <h1>Posts</h1>
//     <hr />
//     {state.isLoading ? (
//       <h1>Loading...</h1>
//     ) : (
//       state.posts.map((post) => <Post key={post.id} {...post} />)
//     )}
//   </div>
// )
// }

// export default Posts
