//taskTitle и taskDescripttion и  doneFlg
const Todo = ({ taskTitle, taskDescription, doneFlag, id, handleChange }) => {
  return (
    <div
      style={{
        textDecoration: doneFlag ? 'line-through' : '',
        color: doneFlag ? 'grey' : '',
      }}
    >
      <h1>{taskTitle}</h1>
      <p>{taskDescription}</p>
      <button onClick={() => handleChange(id)}>Done</button>
    </div>
  )
}

export default Todo
