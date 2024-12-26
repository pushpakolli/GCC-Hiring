import React, { useState } from 'react';
import './Slots.css';
import SlotConfirmation from './SlotConfirmation'; // Import your confirmation component

const Slots = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false); // New state to check if slot is confirmed

  const timeSlots = [
    { id: 1, time: '9:30 AM to 10:30 AM', examDate: '22/12/2345' },
    { id: 2, time: '10:30 AM to 11:30 AM', examDate: '22/12/2345' },
    { id: 3, time: '1:30 PM to 2:30 PM', examDate: '22/12/2345' },
    { id: 4, time: '2:30 PM to 3:30 PM', examDate: '22/12/2345' },
  ];

  const handleSlotClick = (id) => {
    setSelectedSlot(id); // Set the selected slot ID
  };

  const handleBookSlot = () => {
    if (selectedSlot !== null) {
      setIsConfirmed(true); // Once slot is booked, show confirmation
    } else {
      alert('Please select a time slot!');
    }
  };

  const selectedSlotDetails = timeSlots.find((slot) => slot.id === selectedSlot);

  return (
    <div className="timeslot-picker-container">
      {/* If slot is not confirmed, show the selection UI */}
      {!isConfirmed ? (
        <>
          <h2 className="title">Pick Your Preferred Time Slot</h2>

          <div className="slots-container">
            {timeSlots.map((slot) => (
              <div
                key={slot.id}
                className={`slot-card ${selectedSlot === slot.id ? 'selected' : ''}`}
                onClick={() => handleSlotClick(slot.id)}
              >
                <span className="clock-icon">🕒</span>
                <p>{slot.time}</p>
              </div>
            ))}
            
          </div>

          <button className="book-button" onClick={handleBookSlot}>
            Book this Slot
          </button>
        </>
      ) : (
        // If slot is confirmed, show the SlotConfirmation component
        <SlotConfirmation slotDetails={selectedSlotDetails} />
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; © 2024 Global Coding Club. All Rights Reserved</p>
        <p>Contact us: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
      </footer>
    </div>
  );
};

export default Slots;