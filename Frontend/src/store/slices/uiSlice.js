// src/store/slices/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'welcome',
  isTransitioning: false,
  selectedCategory: 'All',
  checkoutStep: 1,
  showAddressForm: false,
  selectedAddressId: null,
  paymentMethod: '',
  notifications: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setTransitioning: (state, action) => {
      state.isTransitioning = action.payload;
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setCheckoutStep: (state, action) => {
      state.checkoutStep = action.payload;
    },

    setShowAddressForm: (state, action) => {
      state.showAddressForm = action.payload;
    },

    setSelectedAddressId: (state, action) => {
      state.selectedAddressId = action.payload;
    },

    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },

    addNotification: (state, action) => {
      state.notifications.push({
        id: Date.now(),
        ...action.payload,
        timestamp: new Date().toISOString(),
      });
    },

    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notif => notif.id !== action.payload
      );
    },

    clearNotifications: (state) => {
      state.notifications = [];
    },

    resetCheckoutState: (state) => {
      state.checkoutStep = 1;
      state.showAddressForm = false;
      state.selectedAddressId = null;
      state.paymentMethod = '';
    },
  },
});

export const {
  setCurrentPage,
  setTransitioning,
  setSelectedCategory,
  setCheckoutStep,
  setShowAddressForm,
  setSelectedAddressId,
  setPaymentMethod,
  addNotification,
  removeNotification,
  clearNotifications,
  resetCheckoutState,
} = uiSlice.actions;

// Selectors
export const selectCurrentPage = (state) => state.ui.currentPage;
export const selectIsTransitioning = (state) => state.ui.isTransitioning;
export const selectSelectedCategory = (state) => state.ui.selectedCategory;
export const selectCheckoutStep = (state) => state.ui.checkoutStep;
export const selectShowAddressForm = (state) => state.ui.showAddressForm;
export const selectSelectedAddressId = (state) => state.ui.selectedAddressId;
export const selectPaymentMethod = (state) => state.ui.paymentMethod;
export const selectNotifications = (state) => state.ui.notifications;

export default uiSlice.reducer;