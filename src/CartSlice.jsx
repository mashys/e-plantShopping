import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.name === product.name);

      if (existingItem) {
        // If the item already exists in the cart, increment its quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise add it as a new item with quantity 1
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      // action.payload is the plant name (string)
      state.items = state.items.filter((item) => item.name !== action.payload);
    },

    updateQuantity: (state, action) => {
      // action.payload: { name: string, quantity: number }
      const { name, quantity } = action.payload;
      const item = state.items.find((item) => item.name === name);

      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;