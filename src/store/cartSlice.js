import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  totalSum: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteProduct: {},
    decreaseProduct: {},
    addProduct: (state, action) => {
      const objectExist = state.products.find((product) => product.id === action.payload.id)
      objectExist
        ? (objectExist.quantity += 1)
        : state.products.push({ ...action.payload, quantity: 1 })
    },
    clearCart: (state) => {
      state.products = []
    },
    countTotalSum: {},
  },
})

export const { deleteProduct, decreaseProduct, addProduct, clearCart, countTotalSum } =
  cartSlice.actions

export default cartSlice.reducer
