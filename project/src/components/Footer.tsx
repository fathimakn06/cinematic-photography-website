import React from 'react';
import { Camera, Heart, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Camera className="h-8 w-8 text-yellow-400" />
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              ele.glances
            </h3>
          </div>
          
          <p className="text-white/70 mb-4 max-w-2xl mx-auto leading-relaxed">
            Making photography education fun, one giggle at a time. Remember: every professional was once a beginner 
            who didn't give up (and probably took a lot of blurry photos first)! 📸✨
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-white/60">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>and lots of</span>
            <Coffee className="h-4 w-4 text-yellow-600" />
            <span>for future photographers everywhere</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/50 text-sm">
              © 2025 ele.glances - Where every photo tells a story (even the blurry ones)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;