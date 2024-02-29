import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import cartReducer from './cartSlice'
import filterReducer from './filterSlice'
import themeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    theme: themeReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})
