import { useContext } from 'react'
import { PostsContext } from '../../contexts'

const Post = ({ title, text, img, marked, id }) => {
  const { changedMarked } = useContext(PostsContext)
  return (
    <div id={id} style={{ background: marked ? 'rgb(238, 209, 209)' : '' }}>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={img} alt={title} />
      <button onClick={() => changedMarked(id)}>change</button>
    </div>
  )
}
export default Post
