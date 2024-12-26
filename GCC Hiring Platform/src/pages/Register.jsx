import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import sampleImage from '../assets/register.png';
import logo from '../assets/gcc-logo.png'; // Import the logo image

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rollno: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      if (formData.name && formData.email && formData.password && formData.rollno) {
        setSuccessMessage('Registration successful!');
        setFormData({
          name: '',
          email: '',
          password: '',
          rollno: '',
        });
        setErrorMessage('');

        navigate('/payment');
      } else {
        setErrorMessage('Please fill in all fields correctly.');
      }
    }, 1000);
  };

  return (
    <div className="register-container">
      {/* Logo section */}
      <div className="logo-container">
        <img src={logo} alt="GCC Logo" className="gcc-logo" />
      </div>

      <div className="register-content">
        <div className="form-section">
          <h2 className="register-title">Welcome to GCC Hiring Platform!</h2>

          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
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
            </div>
            <div className="form-group">
              <label>Roll No</label>
              <input
                type="text"
                name="rollno"
                value={formData.rollno}
                onChange={handleChange}
                placeholder="Enter your roll number"
                required
              />
            </div>

            <div className="register-actions">
              <button type="submit" className="register-btn">Register</button>
              <h4 className="login-text">
                Already have an account? <a href="/login">Login</a> here
              </h4>
            </div>
          </form>
        </div>

        <div className="image-section">
          <img src={sampleImage} alt="Registration" />
        </div>
      </div>

      <footer className="footer">© 2024 Global Coding Club. All Rights Reserved.</footer>
    </div>
  );
};

export default Register;
