import {
  ADD_TODO,
  DECREASE,
  DELETE_TODO,
  INCREASE,
  INCREASE_BY_VALUE,
  RESET,
  TOGGLE_TODO,
} from './constants'

// actionCreator - функция кот возвращет action - объект с свойствами type payload
//COUNTER
const decrease = () => ({ type: DECREASE })
const increase = () => ({ type: INCREASE })
const reset = () => ({ type: RESET })
const increase_by_value = (value) => ({ type: INCREASE_BY_VALUE, payload: value })

// TODOS
const toggleTodo = (value) => ({ type: TOGGLE_TODO, payload: value })
const deleteTodo = (value) => ({ type: DELETE_TODO, payload: value })
const addTodo = (value) => ({ type: ADD_TODO, payload: value })

export { addTodo, decrease, deleteTodo, increase, increase_by_value, reset, toggleTodo }
