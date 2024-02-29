import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { apiSlice } from './apiSlice'
import cartReducer from './cartSlice'
import filterReducer from './filterSlice'
import themeReducer from './themeSlice'

const rootReducer = combineReducers({
  filter: filterReducer,
  theme: themeReducer,
  cart: cartReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  // blackList: [apiSlice.reducer],
  whiteList: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export const persistor = persistStore(store)
