import { createSlice } from "@reduxjs/toolkit";
import { getUserProduct } from './../../api/productApi/productApi';

const initialState = {
  productData: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserProduct.fulfilled, (state, action) => {
      state.productData = action.payload;
    });
  },
});

export default ProductSlice.reducer;
