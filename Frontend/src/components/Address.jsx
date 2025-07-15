// src/components/Address.jsx
import React from "react";
import "../styles/Checkout.css";

const AddressForm = ({ address, onInputChange, onSubmit, onCancel }) => {
  return (
    <div className="address-form-container">
      <form onSubmit={onSubmit} className="address-form">
        <h3>Add New Address</h3>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={address.fullName}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address Line</label>
          <input
            type="text"
            name="addressLine"
            value={address.addressLine}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={address.pincode}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={address.phoneNumber}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={address.email}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;