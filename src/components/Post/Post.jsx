const Post = ({ title, text, img, marked, id, changedMarked }) => {
  return (
    <div id={id} style={{ background: marked ? 'rgb(238, 209, 209)' : '' }}>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={img} alt={title} />
      <button onClick={() => changedMarked(id)}>change</button>
    </div>
  )
}
export default Post
