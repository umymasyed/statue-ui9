import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      {}
      <div className="background-gradient"></div>
      
      {}
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