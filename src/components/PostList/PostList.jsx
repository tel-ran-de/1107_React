import { useState } from 'react'
import { posts } from '../../utils/posts'
import Post from '../Post/Post'

function PostList() {
  const [postList, setPostList] = useState(posts)
  // postList - обратиться к элементу массива по индексу
  // postList[0] - одна цитата
  // сделать рандомный Math.random() - вынести в отдельную функцию
  // Создаем отдельное состояние для одной цитаты (одного объекта)
  // при нажатии на кнопку ] onClick -> setSingleQuote()
  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

export default PostList
