import { useSelector } from 'react-redux'
import Post from '../Post/Post'

function PostList() {
  const postList = useSelector((store) => store.posts)
  return <div>{postList && postList.map((post) => <Post key={post.id} {...post} />)}</div>
}

export default PostList
