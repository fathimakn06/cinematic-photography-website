import React, { useState } from 'react';
import { Smartphone, ChevronDown } from 'lucide-react';
import { phoneModels, getPhoneCapabilities } from '../utils/phoneData';
import { Phone } from '../types';

interface PhoneSelectorProps {
  onPhoneSelected: (phone: Phone) => void;
  onSkip: () => void;
}

const PhoneSelector: React.FC<PhoneSelectorProps> = ({ onPhoneSelected, onSkip }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);

  const handlePhoneSelect = (phone: Phone) => {
    setSelectedPhone(phone);
    setIsOpen(false);
  };

  const handleContinue = () => {
    if (selectedPhone) {
      onPhoneSelected(selectedPhone);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 pt-16 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-16 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-6">
            What's Your Weapon of Choice?
          </h2>
          <p className="text-2xl text-white/80 mb-8">
            Tell us your phone model so we can unleash its hidden photography superpowers! 🦸‍♂️📱
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-left hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Smartphone className="h-8 w-8 text-yellow-400" />
                  <span className="text-xl font-bold text-white">
                    {selectedPhone ? `${selectedPhone.brand} ${selectedPhone.model}` : 'Select Your Phone Model'}
                  </span>
                </div>
                <ChevronDown className={`h-6 w-6 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              {selectedPhone && (
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-white/70 mb-2">Camera Superpowers Detected:</p>
                  <div className="flex flex-wrap gap-2">
                    {getPhoneCapabilities(selectedPhone).map((capability) => (
                      <span key={capability} className="bg-gradient-to-r from-yellow-400/20 to-pink-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden z-20">
                {phoneModels.map((phone) => (
                  <button
                    key={phone.id}
                    onClick={() => handlePhoneSelect(phone)}
                    className="w-full p-4 text-left hover:bg-white/20 transition-colors duration-200 border-b border-white/10 last:border-b-0"
                  >
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-6 w-6 text-yellow-400" />
                      <div>
                        <span className="text-white font-bold">{phone.brand} {phone.model}</span>
                        <p className="text-white/60 text-sm">
                          {phone.cameraSpecs.megapixels}MP • {phone.cameraSpecs.maxZoom}x zoom
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedPhone && (
            <div className="mt-8 text-center">
              <button
                onClick={handleContinue}
                className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-300 hover:to-pink-400 text-black font-black text-xl px-10 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Unlock My Photography Journey! 🚀
              </button>
            </div>
          )}

          <div className="mt-8 text-center">
            <button
              onClick={onSkip}
              className="text-white/60 hover:text-white transition-colors duration-300 font-medium"
            >
              Skip for now (but you'll miss the personalized magic! 😢)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneSelector;