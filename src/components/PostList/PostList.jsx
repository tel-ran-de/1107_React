import { useEffect, useState } from 'react'
import { posts } from '../../utils/posts'
import AddNewPost from '../AddNewPost/AddNewPost'
import Post from '../Post/Post'

function PostList() {
  const [postList, setPostList] = useState(JSON.parse(localStorage.getItem('posts')) ?? posts)
  // false, 0, пустую строку "" || три переменные не пропустит
  // ?? не пропустит null, undefined
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(postList))
  }, [postList])

  const changedMarked = (id) => {
    const newPostList = postList.map(function (post) {
      return post.id === id ? { ...post, marked: !post.marked } : post
    })

    setPostList(newPostList)
  }

  const handleAddPost = (post) => {
    setPostList([...postList, post])
  }

  return (
    <div>
      <AddNewPost handleAddPost={handleAddPost} />
      {postList.map((post) => (
        <Post key={post.id} {...post} changedMarked={changedMarked} />
      ))}
    </div>
  )
}

export default PostList
