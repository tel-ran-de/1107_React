import { useState } from 'react'
import { posts } from '../../utils/posts'
import Post from '../Post/Post'

function PostList() {
  const [postList, setPostList] = useState(posts)

  const changedMarked = (id) => {
    const newPostList = postList.map((post) =>
      post.id === id ? { ...post, marked: !post.marked } : post
    )

    setPostList(newPostList)
    // новая переменная  newPostList
    // пройтись по массиву объектов postList --> map (возвращает новый массив)
    // используем тернарный оператор
    // если id елемента совпадает с id (передается в функцию)
    // то свойство marked поменяй на противоположное
    // {...post, marked: !post.marked}
    // если не совпадают верни тот же объект
    // в setPostList мы добавляем новый массив т.е. изменяем состояние
  }

  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} {...post} changedMarked={changedMarked} />
      ))}
    </div>
  )
}

export default PostList
