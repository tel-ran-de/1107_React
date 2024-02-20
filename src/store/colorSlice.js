import { createSlice } from '@reduxjs/toolkit'
import { changeColor } from '../utils/changeColor'

const initialState = { color: '#ffffff' }

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeRandomColor: (state) => {
      state.color = changeColor()
    },
    resetColor: (state) => {
      state.color = '#ffffff'
    },
  },
})

export const { changeRandomColor, resetColor } = colorSlice.actions
export default colorSlice.reducer
