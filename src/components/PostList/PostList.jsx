import Post from '../Post/Post'

function PostList({ postList, changedMarked }) {
  console.log(postList)
  return (
    <div>
      {postList &&
        postList.map((post) => <Post key={post.id} {...post} changedMarked={changedMarked} />)}
    </div>
  )
}

export default PostList
