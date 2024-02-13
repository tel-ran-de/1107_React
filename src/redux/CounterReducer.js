const initialState = { counter: 0 }

// ВСЕГДА ВОВЗРАЩАЕТ СОСТОЯНИЕ
export const counterReducer = (state = initialState, action) => {
  return state
}

console.log(counterReducer())
