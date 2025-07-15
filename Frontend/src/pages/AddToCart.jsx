// src/pages/AddToCart.jsx
import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from "../components/ProductCard";
import { selectSelectedCategory, setSelectedCategory } from '../store/slices/uiSlice';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/AddToCart.css';
import '../styles/HeroBanner.css';

const AddToCart = () => {
  const dispatch = useDispatch();
  const productsSectionRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Classic Cotton Hoodie",
      brand: "UrbanWear",
      price: 49.99,
      imageUrl: "https://placehold.co/300x300/8B4513/FFFFFF?text=Classic+Hoodie",
      category: "Hoodies & Sweatshirts"
    },
    {
      id: 2,
      name: "Genuine Leather Biker Jacket",
      brand: "Schott NYC",
      price: 699.00,
      imageUrl: "https://placehold.co/300x300/000000/FFFFFF?text=Leather+Jacket",
      category: "Coats & Jackets"
    },
    {
      id: 3,
      name: "Premium V-Neck T-Shirt 3-Pack",
      brand: "Hanes",
      price: 24.99,
      imageUrl: "https://placehold.co/300x300/FFA07A/000000?text=V-Neck+Tee",
      category: "Tees & T-Shirts"
    },
    {
      id: 4,
      name: "Slim Fit Chino Pants",
      brand: "Dockers",
      price: 59.50,
      imageUrl: "https://placehold.co/300x300/006400/FFFFFF?text=Chino+Pants",
      category: "Pants"
    },
    {
      id: 5,
      name: "Air Max Running Shoes",
      brand: "Nike",
      price: 129.99,
      imageUrl: "https://placehold.co/300x300/FF0000/FFFFFF?text=Nike+Air+Max",
      category: "Sneakers"
    },
    {
      id: 6,
      name: "Classic Crewneck Sweatshirt",
      brand: "Champion",
      price: 39.99,
      imageUrl: "https://placehold.co/300x300/4169E1/FFFFFF?text=Crewneck+Sweatshirt",
      category: "Hoodies & Sweatshirts"
    },
    {
      id: 7,
      name: "Waterproof Parka",
      brand: "The North Face",
      price: 249.00,
      imageUrl: "https://placehold.co/300x300/4682B4/FFFFFF?text=Waterproof+Parka",
      category: "Coats & Jackets"
    },
    {
      id: 8,
      name: "Performance Polo Shirt",
      brand: "Under Armour",
      price: 34.99,
      imageUrl: "https://placehold.co/300x300/000000/FFFFFF?text=Performance+Polo",
      category: "Shirts"
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Banner Section */}
      <div className="hero-banner">
        <div className="hero-image-container">
          <img
            src="/image/design.png"
            alt="Fashion Model"
            className="hero-model-image"
          />
        </div>
        <div className="hero-content">
          <h1>FASHION</h1>
          <h2>LET'S EXPLORE UNIQUE CLOTHES</h2>
          <p>Live for influential and innovative fashion!</p>
          <button
            className="shop-now-btn"
            onClick={() => productsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Now

          </button>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="products-section" ref={productsSectionRef}>
        <h2 className="section-title">New Arrivals</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;