const Post = ({ title, description, image, marked }) => {
  return (
    <div style={{ background: marked ? 'rgb(238, 209, 209)' : '' }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  )
}
export default Post

// const { title, description, image } = props сразу в параметрах функции

// Примеры того как работают пропс
export const sum = (props) => {
  return props.a + props.b
}

sum({ a: 4, b: 5 })

// export class PostComponent {
//   constructor(props) {
//     this.title = props.title
//   }
// }
