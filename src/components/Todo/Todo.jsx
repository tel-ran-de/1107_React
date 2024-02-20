import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../store/todoSlice'
const Todo = ({ taskTitle, taskDescription, doneFlag, id }) => {
  // импортируем хук useSelector из react redux
  const bgColor = useSelector((state) => state.color.color)
  const dispatch = useDispatch()
  return (
    <div
      style={{
        textDecoration: doneFlag ? 'line-through' : '',
        color: doneFlag ? 'grey' : '',
        background: bgColor,
      }}
    >
      <h1>{taskTitle}</h1>
      <p>{taskDescription}</p>
      <button onClick={() => dispatch(toggleTodo(id))}>TOGGLE</button>
      <button onClick={() => dispatch(deleteTodo(id))}>DELETE</button>
    </div>
  )
}

export default Todo
