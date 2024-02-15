import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './constants'

const initialState = [
  {
    id: '1',
    taskTitle: 'Task 1',
    taskDescription: 'Complete project presentation',
    doneFlag: false,
  },
  {
    id: '2',
    taskTitle: 'Task 2',
    taskDescription: 'Buy groceries',
    doneFlag: true,
  },
]
// REDUCER всегда возвращает состояние
// чистая функция - всегда вовзращает предсказуемый результат
// и не имеет побочный действий
export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, doneFlag: !todo.doneFlag } : todo
      )
    default:
      return state
  }
}
