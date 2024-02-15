import { combineReducers, createStore } from 'redux'
import { counterReducer } from './CounterReducer'
import { TodoReducer } from './TodoReducer'

const reducer = combineReducers({
  counter: counterReducer,
  todos: TodoReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
