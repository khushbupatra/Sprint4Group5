// src/store/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  selectedSizes: {},
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, size = 'M' } = action.payload;
      const existingItem = state.items.find(
        item => item.id === product.id && item.selectedSize === size
      );

      if (existingItem) {
        existingItem.quantity = Math.min(10, existingItem.quantity + 1);
      } else {
        state.items.push({
          ...product,
          selectedSize: size,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        item => !(item.id === id && item.selectedSize === size)
      );
    },

    updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.selectedSize === size
      );
      if (item) {
        item.quantity = Math.max(1, Math.min(10, quantity));
      }
    },

    incrementQuantity: (state, action) => {
      const { id, size } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.selectedSize === size
      );
      if (item) {
        item.quantity = Math.min(10, item.quantity + 1);
      }
    },

    decrementQuantity: (state, action) => {
      const { id, size } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.selectedSize === size
      );
      if (item) {
        item.quantity = Math.max(1, item.quantity - 1);
      }
    },

    updateItemSize: (state, action) => {
      const { id, oldSize, newSize } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.selectedSize === oldSize
      );
      if (item) {
        item.selectedSize = newSize;
      }
    },

    setSelectedSize: (state, action) => {
      const { productId, size } = action.payload;
      state.selectedSizes[productId] = size;
    },

    clearCart: (state) => {
      state.items = [];
      state.selectedSizes = {};
    },

    setCartLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setCartError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  updateItemSize,
  setSelectedSize,
  clearCart,
  setCartLoading,
  setCartError,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsCount = (state) => state.cart.items.length;
export const selectCartTotal = (state) => {
  const subtotal = state.cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    shipping,
    total: parseFloat((subtotal + shipping).toFixed(2)),
  };
};
export const selectSelectedSizes = (state) => state.cart.selectedSizes;
export const selectCartLoading = (state) => state.cart.isLoading;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;