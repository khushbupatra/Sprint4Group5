// src/pages/Welcome.jsx
import React from "react";
import "../styles/Welcomepage.css";

const Welcome = ({ onStartShopping }) => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="main-title">Welcome to Our Store</h1>
        <p className="subtitle">Discover amazing products at great prices</p>
        <button
          onClick={onStartShopping}
          className="start-button"
        >
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Welcome;