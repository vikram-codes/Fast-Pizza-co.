import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {},
    deleteIem(state, action) {},
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearCart(state, action) {},
  },
});
