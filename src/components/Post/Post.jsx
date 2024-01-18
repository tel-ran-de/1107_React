const Post = ({ title, text, img, marked }) => {
  return (
    <div style={{ background: marked ? 'rgb(238, 209, 209)' : '' }}>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={img} alt={title} />
    </div>
  )
}
export default Post
