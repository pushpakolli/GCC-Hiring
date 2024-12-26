// src/pages/NavigationMenu.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCalendarAlt, faFileAlt, faChartBar, faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './NavigationMenu.css'; // Ensure this file styles your navigation menu

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu Button */}
      <button className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      
      {/* Sidebar Menu */}
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/home">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} /> Profile
            </Link>
          </li>
          <li>
            <Link to="/slots">
              <FontAwesomeIcon icon={faCalendarAlt} /> Slots
            </Link>
          </li>
          <li>
            <Link to="/exam">
              <FontAwesomeIcon icon={faFileAlt} /> Exam
            </Link>
          </li>
          <li>
            <Link to="/results">
              <FontAwesomeIcon icon={faChartBar} /> Results
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
