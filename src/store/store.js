import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './../reducers/productSlice/productSlice';
import  wishlistSlice  from '../reducers/wishlistSlice/wishlistSlice';
import  cartSlice  from '../reducers/cartSlice/cartSlice';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    wishlist: wishlistSlice,
    cart: cartSlice
  },
})