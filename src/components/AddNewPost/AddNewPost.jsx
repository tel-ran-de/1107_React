import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addPost } from '../../redux/actionCreators'

const AddNewPost = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    const newPost = {
      title: title,
      text: text,
      id: uuidv4(),
      img: 'https://placehold.co/200x200/orange/white',
      marked: false,
    }
    // отправляем экшен добавления через dispatch в редьюсер
    dispatch(addPost(newPost))
    setTitle('')
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label htmlFor="text">
        Text
        <input
          id="text"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <button type="submit">Add new post</button>
    </form>
  )
}

export default AddNewPost
