import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      {/* Background gradient */}
      <div className="background-gradient"></div>
      
      {/* Artifact image */}
      <div className="artifact-container">
        <img 
          src="./assets/statue.png" 
          alt="Maitreya Buddha statue" 
          className="artifact-image"
        />
      </div>
    </div>
  );
}

export default MainContent;