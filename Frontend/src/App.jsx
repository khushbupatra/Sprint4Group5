// src/App.jsx
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Welcome from "./pages/Welcome";
import AddToCart from "./pages/AddToCart";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Navbar from "./components/Navbar";
import {
  selectCurrentPage,
  selectIsTransitioning,
  setCurrentPage,
  setTransitioning
} from './store/slices/uiSlice';
import "./styles/ecommerce.css";
import "./styles/Welcomepage.css";

function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const isTransitioning = useSelector(selectIsTransitioning);

  const handleStartShopping = () => {
    dispatch(setTransitioning(true));
    setTimeout(() => {
      dispatch(setCurrentPage("add"));
      dispatch(setTransitioning(false));
    }, 800);
  };

  const handleSetPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const renderPage = () => {
    switch (currentPage) {
      case "welcome":
        return <Welcome onStartShopping={handleStartShopping} />;
      case "add":
        return <AddToCart />;
      case "cart":
        return <Cart />;
      case "checkout":
        return <Checkout />;
      case "confirmation":
        return <OrderConfirmation />;
      default:
        return <Welcome onStartShopping={handleStartShopping} />;
    }
  };

  return (
    <div className="app">
      {currentPage !== "welcome" && <Navbar setPage={handleSetPage} />}
      <div className={`page-container ${isTransitioning ? "transitioning" : ""}`}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;