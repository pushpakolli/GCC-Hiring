import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Payment.css'; // Ensure CSS is properly linked
import Sampleimage from '../assets/image.png'; // Ensure you upload the image to match your assets
import GooglePayIcon from '../assets/gpay.png';
import PhonePeIcon from '../assets/phonepe.png';
import PaytmIcon from '../assets/payment.png';
import QrCode from '../assets/qr.png'; // Ensure path is correct

const Payment = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false); // State to track payment success

  // Handle file upload
  const handleScreenshotUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsPaymentSuccess(true); // Mark payment as successful once file is uploaded
    }
  };

  // Handle navigation to the slots page
  const handleProceedToNextPage = () => {
    navigate('/slots'); // Navigate to the Slots page
  };

  return (
    <div className="Payment-container">
      <h2 className="Payment-title">Payment with QR Code</h2>
      <p className="scan-to-pay">Scan to Pay</p>
      <div className="Payment-content">
        <div className="qr-section">
          <div className="qr-code-container">
            <img src={QrCode} alt="QR Code" className="qr-code" />
          </div>
          <h3 className="payment-methods-title">Supported Payment Methods</h3>
          <div className="payment-methods">
            <a href="https://pay.google.com/" target="_blank" rel="noopener noreferrer">
              <img src={GooglePayIcon} alt="Google Pay" className="payment-method-icon" />
            </a>
            <a href="https://www.phonepe.com/" target="_blank" rel="noopener noreferrer">
              <img src={PhonePeIcon} alt="PhonePe" className="payment-method-icon" />
            </a>
            <a href="https://paytm.com/" target="_blank" rel="noopener noreferrer">
              <img src={PaytmIcon} alt="Paytm" className="payment-method-icon" />
            </a>
          </div>
        </div>

        <div className="pay-image-section">
          <img src={Sampleimage} alt="Sample Illustration" />
        </div>
      </div>

      {/* Upload Screenshot Section */}
      <div className="upload-section">
        <label htmlFor="screenshot-upload" className="upload-label">Upload Payment Screenshot:</label>
        <input
          type="file"
          id="screenshot-upload"
          accept="image/*"
          onChange={handleScreenshotUpload}
        />
      </div>

      {/* Payment Success Message and Button */}
      {isPaymentSuccess && (
        <div className="payment-success-section">
          <h3 className="payment-success-message">Payment Successful!</h3>
          <button className="proceed-button" onClick={handleProceedToNextPage}>
            Go to Next Page
          </button>
        </div>
      )}

      <div className="footer-container">
        <footer className="footer">2024 Global Coding Club. All Rights Reserved.</footer>
      </div>
    </div>
  );
};

export default Payment;
