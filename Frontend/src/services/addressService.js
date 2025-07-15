// src/services/addressService.js
import api from './api';

export const getAddresses = (userId) => {
  return api.get(`/users/${userId}/addresses`);
};

export const addAddress = (userId, addressData) => {
  return api.post(`/users/${userId}/addresses`, addressData);
};

export const updateAddress = (userId, addressId, addressData) => {
  return api.put(`/users/${userId}/addresses/${addressId}`, addressData);
};

export const deleteAddress = (userId, addressId) => {
  return api.delete(`/users/${userId}/addresses/${addressId}`);
};