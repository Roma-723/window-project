import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: JSON.parse(localStorage.getItem("wishlist")) || []
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist(state, action) {
      const item = action.payload
      const exist = state.items.find(p => p.id === item.id)
      if (exist) {
        state.items = state.items.filter(p => p.id !== item.id)
      } else {
        state.items.push(item)
      }
      localStorage.setItem("wishlist", JSON.stringify(state.items))
    }
  }
})

export const { toggleWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
