import { DECREASE, INCREASE, INCREASE_BY_VALUE, RESET } from './constants.js'
const initialState = { counter: 0 }

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: (state.counter += 1),
      }
    case DECREASE:
      return {
        ...state,
        counter: (state.counter -= 1),
      }
    case RESET:
      return {
        ...state,
        counter: (state.counter = 0),
      }
    case INCREASE_BY_VALUE:
      return {
        ...state,
        counter: (state.counter += action.payload),
      }
    default:
      return state
  }
}

// case "DECREASE" уменьшает количество на один

// в копоненте надо будет на клик вызвать диспатч с экшеном у кот тип DEACREASE

// CASE RESET
