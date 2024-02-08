import { useContext } from 'react'
import { PostsContext, ThemeContext } from '../../contexts'

const Post = ({ title, text, img, marked, id }) => {
  const { changedMarked, handleDeletePost } = useContext(PostsContext)
  const { theme } = useContext(ThemeContext)
  return (
    <div id={id} style={{ background: marked ? 'rgb(238, 209, 209)' : '' }}>
      <h1
        style={{
          color: theme === 'dark' ? '#ffffff' : '#000000',
          background: theme === 'dark' ? '#3c3a3a' : '#ffffff',
        }}
      >
        {title}
      </h1>
      <p>{text}</p>
      <img src={img} alt={title} />
      <button onClick={() => changedMarked(id)}>change</button>
      <button onClick={() => handleDeletePost(id)}>delete</button>
    </div>
  )
}
export default Post
