import { todos } from '../../utils/todos'
import Todo from '../Todo/Todo'

function TodoList() {
  console.log(todos)
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
