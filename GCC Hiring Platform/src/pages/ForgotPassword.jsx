// src/pages/ForgotPassword/ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ForgotPassword.css'; // CSS file for styling
import sampleImage from '../assets/login.png'; // Path to your image

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Error sending email');
      }

      const data = await response.json();
      console.log(data); // Handle success message
      alert('Password reset email sent!'); // Notify user
      navigate('/login'); // Redirect to login page after submission
    } catch (error) {
      console.error(error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-content">
        <h2 className="forgot-password-title">Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="forgot-password-actions">
            <button type="submit" className="forgot-password-btn">Send Reset Link</button>
          </div>
        </form>
      </div>
      <div className="image-section">
        <img src={sampleImage} alt="Forgot Password" />
      </div>
    </div>
  );
};

export default ForgotPassword;
