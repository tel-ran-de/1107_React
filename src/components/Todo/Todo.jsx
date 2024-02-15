import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../redux/actionCreators'

const Todo = ({ taskTitle, taskDescription, doneFlag, id }) => {
  const dispatch = useDispatch()
  return (
    <div
      style={{
        textDecoration: doneFlag ? 'line-through' : '',
        color: doneFlag ? 'grey' : '',
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
