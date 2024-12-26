
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './login.css'; 
import sampleImage from '../assets/login.png'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="form-section">
          <h2 className="login-title">Login to your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              {/* Forgot Password Link */}
              <p className="forgot-password">
                <a href="/forgot-password">Forgot Password?</a>
              </p>
            </div>

            <div className="login-actions">
              <button type="submit" className="login-btn">Login</button>
              <p className="register-text">
                Don’t have an account? <a href="/register">Register </a>here
              </p>
            </div>
          </form>
        </div>
        {/* Right Side - Image Section */}
        <div className="image-section">
          <img src={sampleImage} alt="Login" />
        </div>
      </div>
      <footer className="footer">© 2024 Global Coding Club. All Rights Reserved.</footer>
    </div>
  );
};

export default Login;
