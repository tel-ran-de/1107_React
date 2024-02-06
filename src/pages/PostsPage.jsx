import { useEffect, useState } from 'react'
import AddNewPost from '../components/AddNewPost/AddNewPost'
import PostList from '../components/PostList/PostList'
import { posts } from '../utils/posts'

const PostsPage = () => {
  const [postList, setPostList] = useState(JSON.parse(localStorage.getItem('posts')) ?? posts)

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
    <main>
      <AddNewPost handleAddPost={handleAddPost} />
      <PostList postList={postList} changedMarked={changedMarked} />
    </main>
  )
}

export default PostsPage
