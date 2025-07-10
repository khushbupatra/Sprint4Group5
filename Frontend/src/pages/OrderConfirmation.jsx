// src/pages/OrderConfirmation.jsx
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentOrder } from '../store/slices/orderSlice';
import { setCurrentPage } from '../store/slices/uiSlice';
import {
  FaRegCheckCircle,
  FaBox,
  FaShippingFast,
  FaCheck
} from 'react-icons/fa';
import "../styles/OrderConfirmation.css";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const order = useSelector(selectCurrentOrder);

  const handleContinueShopping = () => {
    dispatch(setCurrentPage("add"));
  };

  if (!order) {
    return (
      <div className="confirmation-container">
        <h2>No order found</h2>
        <button
          onClick={handleContinueShopping}
          className="btn btn-primary"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const rewardPoints = Math.floor(order.total / 10);

  return (
    <div className="confirmation-container">
      <div className="confirmation-header">
        <div className="success-icon">
          <FaRegCheckCircle />
        </div>
        <h1>Order Confirmed!</h1>
        <p>Thank you for your purchase. Your order has been placed successfully.</p>
        <div className="order-number">Order #: {order.orderNumber}</div>
      </div>

      <div className="order-timeline">
        <div className="timeline-step">
          <div className="step-icon">
            <FaBox />
          </div>
          <div className="step-content">
            <h4>Order Placed</h4>
            <p>{new Date(order.orderDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="timeline-step">
          <div className="step-icon">
            <FaCheck />
          </div>
          <div className="step-content">
            <h4>Processing</h4>
            <p>Your order is being prepared</p>
          </div>
        </div>

        <div className="timeline-step">
          <div className="step-icon">
            <FaShippingFast />
          </div>
          <div className="step-content">
            <h4>Shipped</h4>
            <p>Expected in 2-3 business days</p>
          </div>
        </div>
      </div>

      <div className="order-details">
        <div className="detail-section">
          <h3>Shipping Information</h3>
          <div className="shipping-info">
            <p>{order.address.fullName}</p>
            <p>{order.address.addressLine}</p>
            <p>{order.address.city}, {order.address.state} {order.address.pincode}</p>
            <p>Phone: {order.address.phoneNumber}</p>
          </div>
        </div>

        <div className="detail-section">
          <h3>Order Summary</h3>
          <div className="order-items">
            {order.items.map(item => (
              <div key={`${item.id}-${item.selectedSize}`} className="order-item">
                <div className="item-image">
                  <img src={item.imageUrl} alt={item.name} />
                </div>
                <div className="item-info">
                  <h4>{item.name} ({item.selectedSize})</h4>
                  <p className="item-meta">Qty: {item.quantity}</p>
                </div>
                <p className="item-price">${item.price.toFixed(2)}</p>
                <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="payment-total">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>${order.shipping.toFixed(2)}</span>
            </div>
            <div className="total-row grand-total">
              <span>Total:</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Payment Method</h3>
          <div className="payment-info">
            <p>
              {order.paymentMethod === "credit" && "Credit Card"}
              {order.paymentMethod === "debit" && "Debit Card"}
              {order.paymentMethod === "paypal" && "PayPal"}
            </p>
          </div>
        </div>

        <div className="rewards-earned">
          <h3>Rewards Earned</h3>
          <div className="rewards-card">
            <div className="rewards-points">{rewardPoints} Points</div>
            <p>You've earned {rewardPoints} reward points with this purchase.</p>
          </div>
        </div>
      </div>

      <div className="confirmation-actions">
        <button
          onClick={handleContinueShopping}
          className="btn btn-primary"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
