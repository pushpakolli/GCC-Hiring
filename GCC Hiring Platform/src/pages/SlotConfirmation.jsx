import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Slots.css';

const SlotConfirmation = ({ slotDetails }) => {
  const navigate = useNavigate();

  if (!slotDetails) {
    return (
      <div className="confirmation-container">
        <h1>No Slot Booked</h1>
        <p>Please go back and select a slot to book.</p>
        <button className="ok-button" onClick={() => navigate('/slots')}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <h1>Slot Booking Successful!</h1>
      <p style={{ fontSize: '24px', margin: '20px 0' }}>
        You have successfully booked your slot for:
      </p>
      <div className="slot-details">
        <label htmlFor="slot-time">Slot Time:</label>
        <p>{slotDetails.time}</p>
        <label htmlFor="exam-date">Exam Date:</label>
        <p>{slotDetails.examDate}</p>
      </div>
      <button
        className="ok-button"
        onClick={() => navigate('/')}
      >
        OK
      </button>
    </div>
  );
};

export default SlotConfirmation;