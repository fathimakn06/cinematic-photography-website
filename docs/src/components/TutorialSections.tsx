import React, { useState } from 'react';
import { BookOpen, Zap, Crown, ChevronRight } from 'lucide-react';
import { tutorials } from '../utils/tutorialData';
import { Phone } from '../types';

interface TutorialSectionsProps {
  selectedPhone: Phone | null;
}

const TutorialSections: React.FC<TutorialSectionsProps> = ({ selectedPhone }) => {
  const [activeLevel, setActiveLevel] = useState<'beginner' | 'intermediate' | 'expert' | null>(null);
  const [expandedTutorial, setExpandedTutorial] = useState<string | null>(null);

  const levels = [
    {
      id: 'beginner' as const,
      title: 'Beginner Basics',
      subtitle: 'From Zero to "Hey, That\'s Not Terrible!"',
      icon: BookOpen,
      color: 'from-green-400 to-blue-500',
      bgColor: 'from-green-900/20 to-blue-900/20',
      description: 'Master the art of not dropping your phone while taking photos (seriously, this is important!)'
    },
    {
      id: 'intermediate' as const,
      title: 'Intermediate Know-How',
      subtitle: 'Level Up to "Wait, You Took This?"',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      description: 'Composition tricks that make people think you secretly went to art school'
    },
    {
      id: 'expert' as const,
      title: 'Expert Mode',
      subtitle: 'Accidentally Became a Filmmaker Territory',
      icon: Crown,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      description: 'Pro techniques that make your Instagram look like a movie trailer'
    }
  ];

  const levelTutorials = activeLevel ? tutorials.filter(t => t.level === activeLevel) : [];

  const canAccessTutorial = (tutorial: any) => {
    if (!selectedPhone || !tutorial.requiredFeatures) return true;
    
    const phoneCapabilities = selectedPhone ? Object.entries(selectedPhone.cameraSpecs)
      .filter(([_, value]) => value === true)
      .map(([key]) => key) : [];
    
    return tutorial.requiredFeatures.every((feature: string) => 
      phoneCapabilities.includes(feature.toLowerCase().replace(/[^a-z]/g, ''))
    );
  };

  return (
    <section id="tutorials" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-6">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Pick your skill level and prepare for photography wisdom served with a side of giggles! 
            {selectedPhone && (
              <span className="block mt-2 text-yellow-400 font-bold">
                Optimized for your {selectedPhone.brand} {selectedPhone.model}! 🎯
              </span>
            )}
          </p>
        </div>

        {/* Level Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {levels.map((level) => {
            const Icon = level.icon;
            const isActive = activeLevel === level.id;
            
            return (
              <button
                key={level.id}
                onClick={() => setActiveLevel(isActive ? null : level.id)}
                className={`group relative overflow-hidden bg-gradient-to-br ${level.bgColor} backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                  isActive ? 'ring-4 ring-yellow-400/50 bg-white/20' : ''
                }`}
              >
                <div className="relative z-10">
                  <Icon className={`h-16 w-16 mx-auto mb-4 bg-gradient-to-r ${level.color} bg-clip-text`} style={{ color: 'transparent' }} />
                  <h3 className="text-2xl font-black text-white mb-2">{level.title}</h3>
                  <h4 className={`text-lg font-bold bg-gradient-to-r ${level.color} bg-clip-text mb-4`} style={{ color: 'transparent' }}>
                    {level.subtitle}
                  </h4>
                  <p className="text-white/70">{level.description}</p>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${level.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </button>
            );
          })}
        </div>

        {/* Tutorial List */}
        {activeLevel && (
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              {levels.find(l => l.id === activeLevel)?.title} Tutorials
            </h3>
            
            {levelTutorials.map((tutorial) => {
              const isExpanded = expandedTutorial === tutorial.id;
              const canAccess = canAccessTutorial(tutorial);
              
              return (
                <div
                  key={tutorial.id}
                  className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 ${
                    canAccess ? 'hover:bg-white/20' : 'opacity-50'
                  }`}
                >
                  <button
                    onClick={() => canAccess && setExpandedTutorial(isExpanded ? null : tutorial.id)}
                    className="w-full p-6 text-left"
                    disabled={!canAccess}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">{tutorial.title}</h4>
                        <p className="text-white/70 text-lg mb-2">{tutorial.description}</p>
                        <p className="text-yellow-400 font-medium">{tutorial.funnyNote}</p>
                        {!canAccess && selectedPhone && (
                          <p className="text-red-400 mt-2 text-sm">
                            Requires features not available on your {selectedPhone.brand} {selectedPhone.model}
                          </p>
                        )}
                      </div>
                      {canAccess && (
                        <ChevronRight className={`h-6 w-6 text-white/60 transition-transform duration-300 ${
                          isExpanded ? 'rotate-90' : ''
                        }`} />
                      )}
                    </div>
                  </button>

                  {isExpanded && canAccess && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-white/20 pt-6">
                        <h5 className="text-xl font-bold text-white mb-4">Step-by-Step Guide:</h5>
                        <div className="space-y-4">
                          {tutorial.steps.map((step, index) => (
                            <div key={step.id} className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl">
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full flex items-center justify-center text-black font-bold">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <h6 className="font-bold text-white mb-1 flex items-center space-x-2">
                                  <span>{step.title}</span>
                                  <span className="text-2xl">{step.emoji}</span>
                                </h6>
                                <p className="text-white/70 mb-2">{step.description}</p>
                                <p className="text-yellow-400 font-medium text-sm italic">{step.funnyNote}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <button
            className="text-white/60 hover:text-white transition-colors duration-300 font-medium"
          >
            Continue without selecting a phone
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorialSections;