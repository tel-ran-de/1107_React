import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PostsContext } from '../../contexts'

const AddNewPost = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const { handleAddPost } = useContext(PostsContext)
 
  const handleSubmit = (event) => {
    event.preventDefault()
    // сформировать объект из 4 полей title, text, id, marked, false
    const newPost = {
      title: title,
      text: text,
      id: uuidv4(),
      img: 'https://placehold.co/200x200/orange/white',
      marked: false,
    }
    // вызываем
    handleAddPost(newPost)
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
