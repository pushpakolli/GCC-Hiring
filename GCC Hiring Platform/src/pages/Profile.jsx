import React, { useState, useEffect, useRef } from 'react';
import NavigationMenu from './NavigationMenu';
import './Profile.css';

const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
    mobile: '',
    address: '',
  });
  const [avatar, setAvatar] = useState('https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'); // Default avatar
  const sidebarRef = useRef(null); // Reference for sidebar element

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log('Profile data saved:', formData);
    setIsEditing(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result); // Update the avatar state with the new image
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-container">
      {/* Navbar with menu button */}
      <div className="profile-navbar">
        <button className="profile-menu-button" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Sidebar with toggle functionality */}
      <div ref={sidebarRef} className={`profile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <NavigationMenu />
      </div>

      <div className="profile-header">
        <div className="profile-avatar">
          <img src={avatar} alt="Profile" />
          <label htmlFor="file-input" className="camera-icon">
            <i className="fas fa-camera"></i>
          </label>
          <input
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }} // Hide the file input
          />
        </div>
        <div className="profile-user-info">
          <h2>USERNAME</h2>
          <p>Welcome to your Profile</p>
        </div>
        <div className="profile-edit-icon" onClick={handleEdit}>
          <i className="fa fa-pencil-alt"></i>
        </div>
      </div>

      <div className="profile-form">
        <div className="profile-form-row">
          <input
            type="text"
            name="firstName"
            placeholder="Your First Name"
            value={formData.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className="profile-input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className="profile-input"
          />
        </div>
        <div className="profile-form-row">
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            disabled={!isEditing}
            className="profile-input"
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            disabled={!isEditing}
            className="profile-input"
          />
        </div>
        <div className="profile-form-row">
          <input
            type="email"
            name="email"
            placeholder="Your E-mail"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="profile-input"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile No"
            value={formData.mobile}
            onChange={handleChange}
            disabled={!isEditing}
            className="profile-input"
          />
        </div>
        <div className="profile-form-row">
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
            className="profile-input"
          />
        </div>
      </div>

      <div className="profile-action-buttons">
        <button className="profile-edit-button" onClick={handleEdit} disabled={isEditing}>
          Edit
        </button>
        <button className="profile-save-button" onClick={handleSave} disabled={!isEditing}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
