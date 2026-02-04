
import React, { useState, useEffect } from 'react';
import EnvelopeScreen from './components/EnvelopeScreen';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderMain, setShouldRenderMain] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Allow animation to finish before showing main content fully
    setTimeout(() => {
      setShouldRenderMain(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen bg-wedding-green">
      {!shouldRenderMain && (
        <div className={`fixed inset-0 z-50 transition-transform duration-1000 ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
          <EnvelopeScreen onOpen={handleOpen} />
        </div>
      )}
      
      {/* Main content is rendered hidden initially or with conditional rendering */}
      <div className={`${shouldRenderMain ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <MainContent />
      </div>
    </div>
  );
};

export default App;
