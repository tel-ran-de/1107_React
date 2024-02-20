// импорт createSlice
import { createSlice } from '@reduxjs/toolkit'
// создать initialState с массивом
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
// создать todoSlice с и енем todo, IS, reducers пустой
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload]
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, doneFlag: !todo.doneFlag } : todo
      )
    },
  },
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer

// импортировать нужные экшены в компоненты
