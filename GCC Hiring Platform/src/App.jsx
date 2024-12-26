// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Register from './pages/Register';
import Login from './pages/login';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Slots from './pages/Slots';
import Guidelines from './pages/Guidelines'; // Import Guidelines component
import HomePage from './pages/HomePage';
import Exam from './pages/ExamPage'; // Import Exam component
import SlotConfirmation from './pages/SlotConfirmation';
import ForgotPassword from './pages/ForgotPassword';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route for Login */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/slotconfirmation" element={<SlotConfirmation />} />
        <Route path="/guidelines" element={<Guidelines />} /> {/* Guidelines page route */}
        <Route path="/exam" element={<Exam />} /> {/* Exam page route */}
        <Route path="/forgotpassword" element={<ForgotPassword />} /> {/* Exam page route */}

      </Routes>
    </Router>
  );
};

export default App;
