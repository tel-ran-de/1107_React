import { posts } from '../../utils/posts'
import Post from '../Post/Post'

function PostList() {
  console.log(posts)
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

export default PostList
