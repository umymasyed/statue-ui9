import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar, isMobile }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="sidebar">
      <div className={isMobile ? 'hidden' : 'close-button-container'}>
        <button 
          onClick={toggleSidebar}
          className="close-button"
          aria-label="Close sidebar"
        >
          &#8249;
        </button>
      </div>
      
      <h1 className="artifact-title">
        MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
      </h1>
      
      <div className="social-container">
        <div className="social-item">
          <button className="social-button">
            <span className="icon">♥</span>
          </button>
          <span className="count">0</span>
        </div>
        <div className="social-item">
          <button className="social-button">
            <span className="icon">↗</span>
          </button>
          <span className="count">120</span>
        </div>
        <div className="social-item">
          <button className="social-button">
            <span className="icon">👁</span>
          </button>
          <span className="count">27</span>
        </div>
      </div>
      
      <div className="details-container">
        <p><span className="label">Dynasty:</span> Ahichhatra</p>
        <p><span className="label">Period:</span> 200 CE</p>
        <p><span className="label">National Significance</span></p>
        <p><span className="label">Location:</span> National Museum</p>
      </div>
      
      <div className="description-container">
        <h2 className="description-title">Description:</h2>
        <p className="description-text">
        Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets, necklaces, and an amulet. The
        </p>
        <button className="read-more">
          <span className="arrow">→</span> READ MORE
        </button>
      </div>
      
      {/* Action buttons */}
      <div className="action-buttons">
        <button className="add-button">
          ADD TO COLLECTION
        </button>
        <button className="souvenir-button">
          SOUVENIR
        </button>
      </div>
    </div>
  );
}

export default Sidebar;