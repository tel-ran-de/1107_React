import { createStore } from 'redux'
import { counterReducer } from './CounterReducer'

export const store = createStore(counterReducer)
