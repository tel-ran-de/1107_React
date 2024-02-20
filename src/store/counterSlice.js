import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState, // initialState: initialState
  reducers: {
    increase: (state) => {
      state.counter += 1
    },
    decrease: (state) => {
      state.counter -= 1
    },
    reset: (state) => {
      state.counter = 0
    },
  },
})

// increase = {type: 'counter/increase}
export const { increase, decrease, reset } = counterSlice.actions
export default counterSlice.reducer

// раньше вручную создавал экшены 
// за меня это делает rtk
// counter/increase 