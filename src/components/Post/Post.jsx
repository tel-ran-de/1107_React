import { useContext } from 'react'
import { ThemeContext } from '../../contexts'
import { useDispatch } from 'react-redux'
import { togglePost, deletePost } from '../../redux/actionCreators.js'

const Post = ({ title, text, img, marked, id }) => {
  // импортируем диспатч
  const dispatch = useDispatch()
  // импортируем жкшены
  // онклик передаем нужные экшены в редьюсер
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
      <button onClick={() => dispatch(togglePost(id))}>change</button>
      <button onClick={() => dispatch(deletePost(id))}>delete</button>
    </div>
  )
}
export default Post
