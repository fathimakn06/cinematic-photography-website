import React from 'react';
import { Camera, Zap, Star, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onPhoneSelect: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onPhoneSelect }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Hero Title */}
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mb-8 leading-tight">
            Welcome to<br />
            <span className="relative">
              ele.glances
              <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-yellow-400 animate-pulse" />
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Where Photography Gets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 animate-pulse">
              Giggly!
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto font-medium">
            From "How do I even hold this thing?" to "Wait, did I accidentally become a cinematographer?" 
            – We've got your back with tutorials that are actually fun! 📸✨
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Camera className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Phone-Specific Tips</h3>
              <p className="text-white/70">
                Get tutorials tailored to YOUR phone's superpowers (yes, even that ancient model)!
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Zap className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Beginner to Expert</h3>
              <p className="text-white/70">
                Level up from potato-quality pics to "Did you secretly hire a photographer?" shots!
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Star className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Actually Fun Learning</h3>
              <p className="text-white/70">
                No boring technical jargon – just laughs, tips, and "aha!" moments that stick!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onPhoneSelect}
            className="group bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-300 hover:to-pink-400 text-black font-black text-xl px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50"
          >
            <span className="flex items-center space-x-3">
              <span>Let's Get Started!</span>
              <Camera className="h-6 w-6 group-hover:animate-bounce" />
            </span>
          </button>

          <p className="text-white/60 mt-4 text-lg">
            First, tell us what phone you're wielding! 📱
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;