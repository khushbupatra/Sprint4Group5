// src/services/cartService.js
import api from './api';

export const getShoppingCart = (userId) => {
  return api.get(`/users/${userId}/cart`);
};

export const addCartItem = (userId, cartItemData) => {
  return api.post(`/users/${userId}/cart-items`, cartItemData);
};

export const updateCartItem = (userId, productId, cartItemData) => {
  return api.put(`/users/${userId}/cart-items/${productId}`, cartItemData);
};

export const deleteCartItem = (userId, productId) => {
  return api.delete(`/users/${userId}/cart-items/${productId}`);
};