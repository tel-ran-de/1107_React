import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  minPrice: '',
  maxPrice: '',
  sorted: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    minPriceChange: (state, action) => ({
      ...state,
      minPrice: action.payload,
    }),
    maxPriceChange: (state, action) => ({
      ...state,
      maxPrice: action.payload,
    }),
    sortedChange: (state, action) => ({
      ...state,
      sorted: action.payload,
    }),
  },
})

export const { minPriceChange, maxPriceChange, sortedChange } = filterSlice.actions
export default filterSlice.reducer
