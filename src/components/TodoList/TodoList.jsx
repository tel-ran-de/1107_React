import { useState } from 'react'
import { todos } from '../../utils/todos'
import Todo from '../Todo/Todo'

function TodoList() {
  const [todoList, setTodoList] = useState(todos)

  const handleChange = (id) => {
    const newTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, doneFlag: !todo.doneFlag } : todo
    )
    setTodoList(newTodos)
  }

  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} {...todo} handleChange={handleChange} />
      ))}
    </div>
  )
}

export default TodoList
