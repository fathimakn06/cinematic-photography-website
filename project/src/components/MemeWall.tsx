import React from 'react';
import { Camera, AlertTriangle, Lightbulb } from 'lucide-react';
import { memeWallPosts } from '../utils/tutorialData';

const MemeWall: React.FC = () => {
  return (
    <section id="memes" className="py-20 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-6">
            The Hall of "Oops!"
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            We've all been there – these epic fails turned into learning opportunities! 
            Laugh, learn, and most importantly, don't repeat these mistakes! 😅📸
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memeWallPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-white/70 mb-4 leading-relaxed">
                  {post.description}
                </p>

                {/* Funny Caption */}
                <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-3 mb-4">
                  <p className="text-yellow-400 font-bold text-sm italic">
                    {post.funnyCaption}
                  </p>
                </div>

                {/* Tip */}
                <div className="bg-blue-400/10 border border-blue-400/30 rounded-xl p-3">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-300 font-medium text-sm leading-relaxed">
                      {post.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <Camera className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Avoid These Mistakes?
            </h3>
            <p className="text-white/70 mb-6">
              Head back up to our tutorials and learn how to turn your photo fails into photo wins! 
              Your future self (and your Instagram followers) will thank you! 🙌
            </p>
            <button
              onClick={() => document.getElementById('tutorials')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-300 hover:to-pink-400 text-black font-black text-lg px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Take Me to the Tutorials! 📚
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeWall;