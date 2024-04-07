import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Medium Pizza",
      quanity: 2,
      unitPrice: 12.99,
      totalPrice: 25.98,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload == newItem
      const newItem = action.payload;
      state.cart.push(newItem);
    },
    deleteIem(state, action) {
      // payload == pizzaId
      const pizzaId = action.payload;
      state.cart = state.cart.filter((item) => item.pizzaId !== pizzaId);
    },
    increaseItemQuantity(state, action) {
      // payload == pizzaId
      const pizzaId = action.payload;
      const item = state.cart.find((item) => item.pizzaId === pizzaId);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      // payload == pizzaId
      const pizzaId = action.payload;
      const item = state.cart.find((item) => item.pizzaId === pizzaId);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducers;

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
