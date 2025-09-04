import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 to-blue-900/95 backdrop-blur-md border-b border-purple-300/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Camera className="h-8 w-8 text-yellow-400" />
              <Sparkles className="h-4 w-4 text-pink-400 absolute -top-1 -right-1" />
            </div>
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              ele.glances
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tutorials" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Tutorials
            </a>
            <a href="#guide" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Interactive Guide
            </a>
            <a href="#memes" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Meme Wall
            </a>
            <a href="#chat" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Chat Assistant
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;