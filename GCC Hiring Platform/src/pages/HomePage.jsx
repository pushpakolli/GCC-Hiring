// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCalendarAlt, faFileAlt, faChartBar, faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import './home.css';
import { Link } from 'react-router-dom';
import homeImage from '../assets/home.jpg'; // Import the image here
import './SlotConfirmation.jsx'
import './Slots.jsx'

function Home() {
  return (
    <div className="home-content">
      <h1>GCC HIRING PLATFORM</h1>
      <p>Streamline Your Hiring Process</p>
      <img id="home-image" src={homeImage} alt="Hiring Process" /> {/* Use the imported image */}
    </div>
  );
}

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 768) {
        const navMenu = document.querySelector('.nav-menu');
        if (menuOpen && navMenu && !navMenu.contains(event.target)) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="Homepage">
      {!menuOpen && (
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <NavigationMenu isOpen={menuOpen} />
      <Home />
    </div>
  );
}

function NavigationMenu({ isOpen }) {
  return (
    <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to='/profile'>
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
        </li>
        <li>
          <Link to="/slotConfirmation">
            <FontAwesomeIcon icon={faCalendarAlt} /> Slots
          </Link>
        </li>
        <li>
          <Link to="/guidelines">
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
            <FontAwesomeIcon icon={faSignOutAlt} /> SignOut
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;
