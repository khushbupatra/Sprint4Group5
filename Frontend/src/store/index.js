// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import orderSlice from './slices/orderSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});
