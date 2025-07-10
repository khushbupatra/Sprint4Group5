// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartTotal,
  selectCartItems,
  clearCart
} from '../store/slices/cartSlice';
import {
  selectSavedAddresses,
  selectDefaultAddress,
  createOrder,
  addAddress,
  setDefaultAddress
} from '../store/slices/orderSlice';
import {
  selectCheckoutStep,
  setCheckoutStep,
  setSelectedAddressId,
  setPaymentMethod,
  setShowAddressForm,
  resetCheckoutState,
  selectPaymentMethod,
  selectShowAddressForm,
  setCurrentPage
} from '../store/slices/uiSlice';
import AddressForm from "../components/Address";
import {
  FaTruck,
  FaCreditCard,
  FaPaypal,
  FaArrowRight,
  FaArrowLeft,
  FaCheck
} from 'react-icons/fa';
import "../styles/Checkout.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { subtotal, shipping, total } = useSelector(selectCartTotal);
  const savedAddresses = useSelector(selectSavedAddresses);
  const defaultAddress = useSelector(selectDefaultAddress);
  const checkoutStep = useSelector(selectCheckoutStep);
  const paymentMethod = useSelector(selectPaymentMethod);
  const showAddressForm = useSelector(selectShowAddressForm);

  const [newAddress, setNewAddress] = useState({
    fullName: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    dispatch(addAddress(newAddress));
    dispatch(setShowAddressForm(false));
    setNewAddress({
      fullName: "",
      addressLine: "",
      city: "",
      state: "",
      pincode: "",
      phoneNumber: "",
      email: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    const selectedAddress = savedAddresses.find(addr => addr.id === defaultAddress?.id);

    const orderDetails = {
      items: [...cartItems],
      address: { ...selectedAddress },
      paymentMethod,
      subtotal,
      shipping,
      total,
      orderDate: new Date().toISOString(),
      orderNumber: `ORD-${Date.now()}`
    };

    dispatch(createOrder(orderDetails));
    dispatch(clearCart());
    dispatch(resetCheckoutState());
    dispatch(setCurrentPage("confirmation"));
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h2>Checkout</h2>
      </div>

      <div className="checkout-steps">
        <div className={`step ${checkoutStep === 1 ? "active" : ""}`}>
          <FaTruck />
          <p>Shipping</p>
        </div>
        <div className={`step ${checkoutStep === 2 ? "active" : ""}`}>
          <FaCreditCard />
          <p>Payment</p>
        </div>
        <div className={`step ${checkoutStep === 3 ? "active" : ""}`}>
          <FaCheck />
          <p>Review</p>
        </div>
      </div>

      {checkoutStep === 1 && (
        <div className="checkout-step">
          <h3>Shipping Address</h3>
          <div className="saved-addresses">
            {savedAddresses.map(address => (
              <div
                key={address.id}
                className={`address-card ${address.id === defaultAddress?.id ? "selected" : ""}`}
                onClick={() => {
                  dispatch(setSelectedAddressId(address.id));
                  dispatch(setDefaultAddress(address.id));
                }}
              >
                <h4>{address.fullName}</h4>
                <p>{address.addressLine}</p>
                <p>{address.city}, {address.state} {address.pincode}</p>
                <p>Phone: {address.phoneNumber}</p>
                <p>Email: {address.email}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(setShowAddressForm(true))}
            className="add-new-address-btn"
          >
            Add New Address
          </button>

          {showAddressForm && (
            <div className="address-form">
              <h4>Add New Address</h4>
              <form onSubmit={handleAddressSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" value={newAddress.fullName} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label>Address Line</label>
                  <input type="text" name="addressLine" value={newAddress.addressLine} onChange={handleInputChange} required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" value={newAddress.city} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" name="state" value={newAddress.state} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Pincode</label>
                    <input type="text" name="pincode" value={newAddress.pincode} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phoneNumber" value={newAddress.phoneNumber} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={newAddress.email} onChange={handleInputChange} required />
                </div>
                <div className="form-actions">
                  <button type="button" onClick={() => dispatch(setShowAddressForm(false))} className="cancel-btn">Cancel</button>
                  <button type="submit" className="use-address-btn">Save Address</button>
                </div>
              </form>
            </div>
          )}

          <div className="step-actions">
            <button onClick={() => dispatch(setCurrentPage("cart"))} className="back-btn">
              <FaArrowLeft /> Back to Cart
            </button>
            <button onClick={() => dispatch(setCheckoutStep(2))} className="next-btn" disabled={!defaultAddress}>
              Continue to Payment <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      {checkoutStep === 2 && (
        <div className="checkout-step">
          <h3>Payment Method</h3>
          <div className="payment-options">
            <div className={`payment-option ${paymentMethod === "credit" ? "selected" : ""}`} onClick={() => dispatch(setPaymentMethod("credit"))}>
              <FaCreditCard />
              <h4>Credit Card</h4>
              <p>Pay with your credit card</p>
            </div>
            <div className={`payment-option ${paymentMethod === "debit" ? "selected" : ""}`} onClick={() => dispatch(setPaymentMethod("debit"))}>
              <FaCreditCard />
              <h4>Debit Card</h4>
              <p>Pay with your debit card</p>
            </div>
            <div className={`payment-option ${paymentMethod === "paypal" ? "selected" : ""}`} onClick={() => dispatch(setPaymentMethod("paypal"))}>
              <FaPaypal />
              <h4>PayPal</h4>
              <p>Pay with your PayPal account</p>
            </div>
          </div>

          <div className="step-actions">
            <button onClick={() => dispatch(setCheckoutStep(1))} className="back-btn">
              <FaArrowLeft /> Back to Shipping
            </button>
            <button onClick={() => dispatch(setCheckoutStep(3))} className="next-btn" disabled={!paymentMethod}>
              Review Order <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      {checkoutStep === 3 && (
        <div className="checkout-step">
          <h3>Review Your Order</h3>
          <div className="order-review">
            <div className="shipping-review">
              <h4>Shipping Address</h4>
              {defaultAddress && (
                <>
                  <p>{defaultAddress.fullName}</p>
                  <p>{defaultAddress.addressLine}</p>
                  <p>{defaultAddress.city}, {defaultAddress.state} {defaultAddress.pincode}</p>
                  <p>Phone: {defaultAddress.phoneNumber}</p>
                </>
              )}
            </div>

            <div className="payment-review">
              <h4>Payment Method</h4>
              <p>
                {paymentMethod === "credit" && "Credit Card"}
                {paymentMethod === "debit" && "Debit Card"}
                {paymentMethod === "paypal" && "PayPal"}
              </p>
            </div>

            <div className="order-items">
              <h4>Order Items</h4>
              {cartItems.map(item => (
                <div key={`${item.id}-${item.selectedSize}`} className="order-item">
                  <div className="item-image">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h5>{item.name} ({item.selectedSize})</h5>
                    <p>Qty: {item.quantity}</p>
                    <p>${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="total-row grand-total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button onClick={handlePlaceOrder} className="place-order-btn">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
