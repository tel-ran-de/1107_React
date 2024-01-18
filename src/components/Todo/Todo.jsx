//taskTitle и taskDescripttion и  doneFlg
const Todo = ({ taskTitle, taskDescription, doneFlag }) => {
  return (
    <div
      style={{
        textDecoration: doneFlag ? 'line-through' : '',
        color: doneFlag ? 'grey' : '',
      }}
    >
      <h1>{taskTitle}</h1>
      <p>{taskDescription}</p>
    </div>
  )
}

export default Todo
