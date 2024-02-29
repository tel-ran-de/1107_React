import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  totalSum: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id)
      //   const index = state.products.findIndex((product) => product.id === action.payload.id)
      //   state.products.splice(index, 1)
    },
    decreaseProduct: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id)
      const product = state.products.find((product) => product.id === action.payload.id)
      product.quantity > 1 ? (product.quantity -= 1) : state.products.splice(index, 1)
    },
    addProduct: (state, action) => {
      const objectExist = state.products.find((product) => product.id === action.payload.id)
      console.log(state.products.includes(action.payload))
      objectExist
        ? (objectExist.quantity += 1)
        : state.products.push({ ...action.payload, quantity: 1 })
    },
    clearCart: (state) => {
      state.products = []
    },
    countTotalSum: (state) => {
      const total = state.products.reduce(
        (acc, current) => current.price * current.quantity + acc,
        0
      )
      state.totalSum = total
    },
  },
})

export const { deleteProduct, decreaseProduct, addProduct, clearCart, countTotalSum } =
  cartSlice.actions

export default cartSlice.reducer
