import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload
      const exist = state.items.find(p => p.id === item.id)
      if (exist) {
        exist.qty += 1
      } else {
        state.items.push({ ...item, qty: 1 })
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(p => p.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
