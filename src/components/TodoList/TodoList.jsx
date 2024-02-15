import { useSelector } from 'react-redux'
import Todo from '../Todo/Todo'

function TodoList() {
  const todoList = useSelector((state) => state.todos)
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
