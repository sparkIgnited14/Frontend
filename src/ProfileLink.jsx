import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "./profilelink.css";

const ProfileLink = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle the modal
  const [vehicleId, setVehicleId] = useState(""); // State for vehicle ID input
  const [bikeName, setBikeName] = useState(""); // State for selected bike name
  const navigate = useNavigate(); // Navigation hook

  const handleLogin = () => {
    if (vehicleId && bikeName) {
      navigate("/profile"); // Redirect to profile
      setIsOpen(false); // Close the modal after login
    } else {
      alert("Please fill in all fields!");
    }
  };

  const handleClose = () => setIsOpen(false);

  // Modal content rendered via portal
  const modalContent = (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button className="close-button" onClick={handleClose}>
          ×
        </button>
        <h3 className="modal-title">Login</h3>
        <input
          type="text"
          placeholder="Enter Vehicle ID"
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
          className="input-box"
        />
        <select
          value={bikeName}
          onChange={(e) => setBikeName(e.target.value)}
          className="select-box"
        >
          <option value="" disabled>
            Select Bike Name
          </option>
          <option value="Shadow 1.0">Shadow 1.0</option>
          <option value="Shadow 2.0">Shadow 2.0</option>
          <option value="Electric Bike">Electric Bike</option>
        </select>
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );

  return (
    <div className="profile-link-container">
      {/* Main clickable icon */}
      <Link
        className="nav-link btn-bg"
        to="#"
        onClick={() => setIsOpen(true)} // Open the modal
      >
        <b>
          <i className="fa-solid fa-user"></i> Profile
        </b>
      </Link>

      {/* Render modal only if open */}
      {isOpen && ReactDOM.createPortal(modalContent, document.body)}
    </div>
  );
};

export default ProfileLink;
