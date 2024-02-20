import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/todoSlice'
import Todo from '../Todo/Todo'

function TodoList() {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const todoList = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    const newTodo = {
      id: Math.random(),
      taskTitle, // taskTitle: taskTitle
      taskDescription,
      doneFlag: false,
    }
    dispatch(addTodo(newTodo))

    setTaskTitle('')
    setTaskDescription('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskTitle">
          <input
            value={taskTitle}
            type="text"
            id="taskTitle"
            onChange={(event) => setTaskTitle(event.target.value)}
          />
        </label>
        <label htmlFor="taskDescription">
          <input
            value={taskDescription}
            type="text"
            id="taskDesctiption"
            onChange={(event) => setTaskDescription(event.target.value)}
          />
        </label>
        <button type="submit">Add New Todo</button>
      </form>

      {todoList.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
