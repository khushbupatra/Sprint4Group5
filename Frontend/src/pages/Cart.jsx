import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  updateItemSize
} from '../store/slices/cartSlice';
import { setCurrentPage } from '../store/slices/uiSlice';
import { FaPlus, FaMinus, FaTrash, FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import "../styles/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { subtotal, shipping, total } = useSelector(selectCartTotal);

  const handleRemoveItem = (id, size) => {
    dispatch(removeFromCart({ id, size }));
  };

  const handleIncrement = (id, size) => {
    dispatch(incrementQuantity({ id, size }));
  };

  const handleDecrement = (id, size) => {
    dispatch(decrementQuantity({ id, size }));
  };

  const handleSizeChange = (id, oldSize, newSize) => {
    dispatch(updateItemSize({ id, oldSize, newSize }));
  };

  const proceedToCheckout = () => {
    dispatch(setCurrentPage("checkout"));
  };

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Bag</h2>
        <p className="item-count">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
      </div>

      {cartItems.length === 0 ? (
        <motion.div
          className="empty-cart"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="empty-cart-icon">
            <FaShoppingBag />
          </div>
          <h3>Your bag is empty</h3>
          <p>Looks like you haven't added anything to your bag yet</p>
          <button
            onClick={() => dispatch(setCurrentPage("add"))}
            className="continue-shopping"
          >
            Continue Shopping <FaArrowRight />
          </button>
        </motion.div>
      ) : (
        <>
          <div className="cart-items">
            <AnimatePresence>
              {cartItems.map(item => (
                <motion.div
                  key={`${item.id}-${item.selectedSize}`}
                  className="cart-item"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <div className="product-image-container">
                    <img src={item.imageUrl} alt={item.name} className="product-image" />
                  </div>
                  <div className="product-info">
                    <div className="product-header">
                      <h3>{item.name}</h3>
                      <button
                        onClick={() => handleRemoveItem(item.id, item.selectedSize)}
                        className="remove-btn"
                        title="Remove item"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <p className="product-brand">{item.brand}</p>
                    <p className="product-price">${item.price.toFixed(2)}</p>
                    <div className="product-options">
                      <div className="option">
                        <span>Size:</span>
                        <select
                          value={item.selectedSize}
                          onChange={(e) => handleSizeChange(item.id, item.selectedSize, e.target.value)}
                          className="size-selector"
                        >
                          {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      <div className="option">
                        <span>Qty:</span>
                        <div className="quantity-selector">
                          <button
                            onClick={() => handleDecrement(item.id, item.selectedSize)}
                            disabled={item.quantity <= 1}
                            className="quantity-btn"
                          >
                            <FaMinus />
                          </button>
                          <span className="quantity-value">{item.quantity}</span>
                          <button
                            onClick={() => handleIncrement(item.id, item.selectedSize)}
                            disabled={item.quantity >= 10}
                            className="quantity-btn"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            className="cart-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Order Summary</h3>
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${(total + (total * 0.1)).toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={proceedToCheckout}
              className="checkout-btn"
            >
              Proceed to Checkout <FaArrowRight />
            </button>
            <p className="secure-checkout">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="#4CAF50"/>
                <path d="M12 11.99H15C15 13.1 14.1 14 13 14V16C14.76 16 16.25 14.51 16.25 12.75V12C16.25 10.34 14.91 9 13.25 9H12V6L8 9L12 12V11.99Z" fill="white"/>
              </svg>
              Secure Checkout
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Cart;