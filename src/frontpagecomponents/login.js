import React, { useState } from "react";
import "../frontpagecomponents/login.css";
import placement_portal from "../assets/placement_portal.png";
import { Link } from 'react-router-dom';
import ErrorMessage from '../frontpagecomponents/ErrorMessage'; 

function Login() {
  const [formData, setFormData] = useState({
    email: "", 
    password: "",
    isLoggedIn: false,
    showError: false,
    showPassword: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handlePasswordToggle = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = formData;

    
    if (!email || !password) {
      setFormData({
        ...formData,
        showError: true,
      });
      return; 
    }

    // TODO: Validate the email and password
    // TODO: Authenticate the user

    setFormData({
      ...formData,
      isLoggedIn: true,
    });
    history.push("/jobs");
  };


  const handleCloseError = () => {
    setFormData({
      ...formData,
      showError: false,
    });
  };

  const { email, password, isLoggedIn, showError, showPassword } = formData;

  return (
    <div className="login-container">
      <h1 className="portal-text">Placement Portal</h1>
      <div className="login-image-container">
        <img src={placement_portal} alt="Placement Portal" className="login-image" />
      </div>
      <div className="login-content">
        <div className="welcome-container">
          <p className="welcome-text">Welcome</p>
        </div>
        <div className="input-container">
          <label>Email:</label> 
          <div className="password-input">
            <input
              type="text"
              name="email" 
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-container"> 
          <label>Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
            />
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} password-icon`}
              onClick={handlePasswordToggle}
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="login-button">
          <Link to="/jobs">Login</Link>
        </button>
        <p className="new-user-text">
         <Link to="/signup">Click here</Link>
        </p>
      </div>
      {/* Conditionally render the error message */}
      {showError && (
        <ErrorMessage
          message="Please fill in all the fields."
          onClose={handleCloseError}
        />
      )}
    </div>
  );
}

export default Login;
