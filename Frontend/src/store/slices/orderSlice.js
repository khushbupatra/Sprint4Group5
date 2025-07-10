// src/store/slices/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentOrder: null,
  orderHistory: [],
  savedAddresses: [
    {
      id: 1,
      fullName: "Siddharth Nayak",
      addressLine: "Plot No. 145, Sailashree Vihar, Chandrasekharpur",
      city: "Bhubaneswar",
      state: "Odisha",
      pincode: "751023",
      phoneNumber: "9437001234",
      email: "siddharth@gmail.com",
      isDefault: true
    },
    {
      id: 2,
      fullName: "Priya Sahoo",
      addressLine: "D-12, KIIT Campus, Patia",
      city: "Bhubaneswar",
      state: "Odisha",
      pincode: "751024",
      phoneNumber: "9861034567",
      email: "priya11@gmail.com",
      isDefault: false
    }
  ],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const order = {
        ...action.payload,
        orderNumber: `ORD-${Date.now().toString().slice(-6)}`,
        orderDate: new Date().toLocaleString(),
        rewardPoints: Math.floor(action.payload.subtotal / 100) * 10,
      };
      state.currentOrder = order;
      state.orderHistory.push(order);
    },

    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },

    addAddress: (state, action) => {
      const newAddress = {
        ...action.payload,
        id: Date.now(),
        isDefault: false,
      };
      state.savedAddresses.push(newAddress);
    },

    updateAddress: (state, action) => {
      const { id, ...updates } = action.payload;
      const addressIndex = state.savedAddresses.findIndex(addr => addr.id === id);
      if (addressIndex !== -1) {
        state.savedAddresses[addressIndex] = { ...state.savedAddresses[addressIndex], ...updates };
      }
    },

    deleteAddress: (state, action) => {
      state.savedAddresses = state.savedAddresses.filter(addr => addr.id !== action.payload);
    },

    setDefaultAddress: (state, action) => {
      state.savedAddresses = state.savedAddresses.map(addr => ({
        ...addr,
        isDefault: addr.id === action.payload
      }));
    },

    setOrderLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setOrderError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  createOrder,
  clearCurrentOrder,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
  setOrderLoading,
  setOrderError,
} = orderSlice.actions;

// Selectors
export const selectCurrentOrder = (state) => state.order.currentOrder;
export const selectOrderHistory = (state) => state.order.orderHistory;
export const selectSavedAddresses = (state) => state.order.savedAddresses;
export const selectDefaultAddress = (state) =>
  state.order.savedAddresses.find(addr => addr.isDefault);
export const selectOrderLoading = (state) => state.order.isLoading;
export const selectOrderError = (state) => state.order.error;

export default orderSlice.reducer;