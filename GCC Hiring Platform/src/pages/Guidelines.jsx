import React from 'react';
import './Guidelines.css'; // Assuming you want to keep the styles in Guidelines.css
import sampleImage from '../assets/result.png'; // Adjust path if necessary
import { Link } from 'react-router-dom';

function Guidelines() {
  return (
    <div className="guidelines-body"> {/* Scoped unique class for the body */}
      <div className="guidelines-header">
        <h1>Exam Guidelines</h1>
      </div>

      <div className="guidelines-content-container">
        <div className="instructions-card"> {/* Card container for instructions */}
          <h2 className="instructions-card-heading">Instructions</h2>
          <ul>
            <li>Begin your exam only during the time slot you selected.</li>
            <li>Avoid refreshing or closing the exam page, or it might be submitted automatically.</li>
            <li>Once you click "Submit," your answers will be final.</li>
            <li>Ensure you have a stable internet connection throughout the exam.</li>
            <li>Use only the resources allowed during the exam.</li>
            <li>If you encounter any technical issues, report them immediately.</li>
            <li>Keep your workspace clear of any unauthorized materials.</li>
          </ul>
          <p className="guidelines-good-luck">Best of Luck for your exam</p>
        </div>
      </div>

      <div className="start-button-wrapper">
      <button ><Link to='/exam' className="start-btn">START</Link></button>
      </div>

      <div className="guidelines-image">
        <img src={sampleImage} alt="Guideline" />
      </div>
    </div>
  );
}

export default Guidelines;
