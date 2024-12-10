import PostWrapper from './PostWrapper'
import { colors } from '../data/colors'

function Post(props) {
  const { title, body, id, userId } = props

  return (
    <div>
      {colors.map((color, index) => (
        <PostWrapper key={index} color={color}>
          <div>
            <small>{id} </small>
            <h2>{title}</h2>
            <p>{body}</p>
            <h3>UserID: {userId}</h3>
          </div>
        </PostWrapper>
      ))}
    </div>
  )
}

export default Post
