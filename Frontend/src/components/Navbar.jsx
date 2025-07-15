// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaStore, FaCreditCard, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../store/slices/cartSlice';

const Navbar = ({ setPage, currentPage }) => {
  const cartItemsCount = useSelector(selectCartItemsCount);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle page change and close mobile menu
  const handlePageChange = (page) => {
    setPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div
        className="logo"
        onClick={() => handlePageChange("add")}
        tabIndex="0"
        onKeyPress={(e) => e.key === 'Enter' && handlePageChange("add")}
        role="button"
        aria-label="Go to products page"
      >
        E-Commerce Cart
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <button
          onClick={() => handlePageChange("add")}
          className={currentPage === "add" ? "active" : ""}
          aria-label="Products page"
        >
          <FaStore /> Products
        </button>

       <button
         onClick={() => handlePageChange("cart")}
         className={`cart-btn ${currentPage === "cart" ? "active" : ""}`}
         aria-label={`Cart with ${cartItemsCount} items`}
       >
         <FaShoppingCart />
         Cart
         {cartItemsCount > 0 && (
           <span className="inline-cart-count">
             ({cartItemsCount > 99 ? '99+' : cartItemsCount})
           </span>
         )}
       </button>
        <button
          onClick={() => handlePageChange("checkout")}
          className={currentPage === "checkout" ? "active" : ""}
          aria-label="Checkout page"
        >
          <FaCreditCard /> Checkout
        </button>
      </div>

      <button
        className="menu-toggle"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;