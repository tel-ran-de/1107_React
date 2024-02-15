import { composeWithDevTools } from '@redux-devtools/extension'
import { combineReducers, createStore } from 'redux'
import { counterReducer } from './CounterReducer'
import { postReducer } from './PostReducer'
import { TodoReducer } from './TodoReducer'

const reducer = combineReducers({
  counter: counterReducer,
  todos: TodoReducer,
  posts: postReducer,
})

export const store = createStore(reducer, composeWithDevTools())
