function PostWrapper({ children, color }) {
  const style = {
    backgroundColor: color,
    border: '1px solid white',
    borderRadius: '15px',
    padding: '2em',
    margin: '3em auto',
    maxWidth: '50%',
    boxShadow: '0 0 5px lightyellow',
  }

  return <section style={style}>{children}</section>
}

export default PostWrapper
