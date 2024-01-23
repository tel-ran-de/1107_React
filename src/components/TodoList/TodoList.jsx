import { todos } from '../../utils/todos'
import Todo from '../Todo/Todo'

function TodoList() {
  // создаем useState
  // заносим todo из внешнего файла в состояние todoList
  // в компоненте TODO добавляем кнопку
  // изменяет переменную doneFlag
  // прокидываем в функцию changeDoneFlag id
  // добавляем id и changeDoneFlag  в пропсы
  // функцию прокидываем в пропсы в компоненте Todo
  // реализовываем функцию, кот изменяет doneFlag
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
