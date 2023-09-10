import React from "react";
import "../frontpagecomponents/ErrorMessage.css";
import errorIcon from "../assets/error.png"; 

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div className="error-modal">
      <div className="error-content">
        <img src={errorIcon} alt="Error" className="error-icon" />
        <p className="error-text">{message}</p>
        <button className="error-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
