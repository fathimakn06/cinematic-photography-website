import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import PhoneSelector from './components/PhoneSelector';
import TutorialSections from './components/TutorialSections';
import InteractiveGuide from './components/InteractiveGuide';
import Chatbot from './components/Chatbot';
import MemeWall from './components/MemeWall';
import Footer from './components/Footer';
import { Phone } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'phone-select' | 'main'>('landing');
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);

  const handlePhoneSelectStart = () => {
    setCurrentView('phone-select');
  };

  const handlePhoneSelected = (phone: Phone) => {
    setSelectedPhone(phone);
    setCurrentView('main');
  };

  const handleSkipPhoneSelection = () => {
    setCurrentView('main');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {currentView === 'landing' && (
        <LandingPage onPhoneSelect={handlePhoneSelectStart} />
      )}
      
      {currentView === 'phone-select' && (
        <PhoneSelector 
          onPhoneSelected={handlePhoneSelected}
          onSkip={handleSkipPhoneSelection}
        />
      )}
      
      {currentView === 'main' && (
        <>
          <TutorialSections selectedPhone={selectedPhone} />
          <InteractiveGuide />
          <MemeWall />
          <Chatbot />
        </>
      )}
      
      {currentView === 'main' && <Footer />}
    </div>
  );
}

export default App;