import { useContext } from 'react'
import { PostsContext } from '../../contexts'
import Post from '../Post/Post'

function PostList({ changedMarked }) {
  const { postList } = useContext(PostsContext)
  console.log(postList)

  return (
    <div>
      {postList &&
        postList.map((post) => <Post key={post.id} {...post} changedMarked={changedMarked} />)}
    </div>
  )
}

export default PostList
