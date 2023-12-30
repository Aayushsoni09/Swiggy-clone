import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState:{'items':[]},
  reducers: {
    addItem: (state,action) => {
        state.items.push(action.payload)
    },
 
    clearCart: (state) => {
      state.items=[]
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      state.items[itemIndex].quantity++;
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      state.items[itemIndex].quantity--;
      if (state.items[itemIndex].quantity === 0) {
        state.items.splice(itemIndex, 1);
      }
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;