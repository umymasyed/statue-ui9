import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Close sidebar by default on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <main className="main-container">
        {/* Toggle button - visible when sidebar is closed or on mobile */}
        {(!sidebarOpen || isMobile) && (
          <button 
            onClick={toggleSidebar}
            className="toggle-button"
            aria-label="Toggle sidebar"
          >
            <span className={`chevron ${!sidebarOpen ? 'rotate' : ''}`}>
              &#8249;
            </span>
          </button>
        )}
        
        <Sidebar 
          isOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar} 
          isMobile={isMobile}
        />
        
        <MainContent />
      </main>
    </div>
  );
}

export default App;