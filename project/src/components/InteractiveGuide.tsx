import React, { useState } from 'react';
import { Camera, ArrowRight, RotateCcw, CheckCircle } from 'lucide-react';

const InteractiveGuide: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const guideSteps = [
    {
      title: 'Find Your Light Source',
      description: 'Look for natural light or a well-lit area. Avoid overhead lights that make you look like a raccoon.',
      funnyNote: 'If you look like a vampire in the photo, you need more light! 🧛‍♂️',
      emoji: '💡',
      tip: 'Pro tip: Face a window or go outside. Your phone camera will thank you!'
    },
    {
      title: 'Check Your Background',
      description: 'Make sure there\'s nothing weird behind your subject (toilet, messy room, your brother making faces).',
      funnyNote: 'Nothing ruins a beautiful portrait like a toilet in the background! 🚽',
      emoji: '🖼️',
      tip: 'Clean backgrounds = professional photos. Messy backgrounds = memes.'
    },
    {
      title: 'Hold Your Phone Steady',
      description: 'Breathe in, hold your breath, take the photo, then breathe out. Like a sniper, but for Instagram.',
      funnyNote: 'Shaky hands = abstract art (sometimes that\'s good, usually it\'s not)',
      emoji: '🎯',
      tip: 'Use both hands and brace yourself against something solid if needed.'
    },
    {
      title: 'Frame Your Shot',
      description: 'Use the rule of thirds or break it dramatically. Put interesting stuff where the grid lines cross.',
      funnyNote: 'It\'s like tic-tac-toe, but instead of X\'s and O\'s, you get masterpieces! ⭕',
      emoji: '📏',
      tip: 'Turn on grid lines in your camera settings if you haven\'t already!'
    },
    {
      title: 'Take Multiple Shots',
      description: 'Take 5-10 photos of the same thing. One of them will definitely be "the one."',
      funnyNote: 'It\'s not being indecisive, it\'s being thorough! (Tell that to your storage space)',
      emoji: '📸',
      tip: 'Even pros take dozens of shots. Delete the bad ones, keep the magic!'
    },
    {
      title: 'Review and Select',
      description: 'Look at all your photos and pick the best one. Trust your gut – it knows good photos!',
      funnyNote: 'If you can\'t decide between two photos, flip a coin. Your heart will tell you which one you\'re hoping for! 💰',
      emoji: '✨',
      tip: 'Don\'t overthink it. The photo that makes you smile is usually the winner!'
    }
  ];

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < guideSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const currentStepData = guideSteps[currentStep];
  const isLastStep = currentStep === guideSteps.length - 1;
  const isCompleted = completedSteps.length === guideSteps.length;

  return (
    <section id="guide" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-6">
            The Perfect Photo Recipe
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Follow these steps like you're baking a cake, but instead of flour and eggs, 
            you're using light and angles! 👨‍🍳📸
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-bold">Progress</span>
            <span className="text-yellow-400 font-bold">
              {completedSteps.length} / {guideSteps.length} steps
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-pink-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedSteps.length / guideSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Current Step */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full flex items-center justify-center text-black font-black text-xl">
                {currentStep + 1}
              </div>
              <h3 className="text-3xl font-black text-white">
                Step {currentStep + 1}: {currentStepData.title}
              </h3>
              <span className="text-3xl">{currentStepData.emoji}</span>
            </div>
            {completedSteps.includes(currentStep) && (
              <CheckCircle className="h-8 w-8 text-green-400" />
            )}
          </div>

          <div className="space-y-4">
            <p className="text-lg text-white/80 leading-relaxed">
              {currentStepData.description}
            </p>
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4">
              <p className="text-yellow-400 font-bold italic">
                {currentStepData.funnyNote}
              </p>
            </div>
            <div className="bg-blue-400/10 border border-blue-400/30 rounded-xl p-4">
              <p className="text-blue-300 font-medium">
                💡 {currentStepData.tip}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                currentStep > 0 
                  ? 'bg-white/20 text-white hover:bg-white/30' 
                  : 'bg-white/5 text-white/30 cursor-not-allowed'
              }`}
              disabled={currentStep === 0}
            >
              <span>← Previous</span>
            </button>

            <button
              onClick={handleStepComplete}
              className="group bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-300 hover:to-pink-400 text-black font-black text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span className="flex items-center space-x-2">
                <span>{isLastStep ? 'Complete Guide!' : 'Got It!'}</span>
                {!isLastStep && <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                {isLastStep && <CheckCircle className="h-5 w-5" />}
              </span>
            </button>
          </div>
        </div>

        {/* Reset Button */}
        {isCompleted && (
          <div className="text-center">
            <div className="bg-green-400/10 border border-green-400/30 rounded-2xl p-8 mb-8">
              <h3 className="text-3xl font-bold text-green-400 mb-4">
                🎉 Congratulations! You're Now a Photo Wizard! 🧙‍♀️
              </h3>
              <p className="text-white/80 text-lg">
                You've completed the perfect photo recipe. Time to go out there and capture some magic!
              </p>
            </div>
            
            <button
              onClick={handleReset}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-full mx-auto transition-all duration-300"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Start Over</span>
            </button>
          </div>
        )}

        {/* Step Overview */}
        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {guideSteps.map((step, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                completedSteps.includes(index)
                  ? 'bg-green-400/10 border-green-400/30'
                  : currentStep === index
                  ? 'bg-yellow-400/10 border-yellow-400/30'
                  : 'bg-white/5 border-white/10'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{step.emoji}</span>
                <span className={`font-bold ${
                  completedSteps.includes(index) 
                    ? 'text-green-400' 
                    : currentStep === index 
                    ? 'text-yellow-400' 
                    : 'text-white/60'
                }`}>
                  {step.title}
                </span>
                {completedSteps.includes(index) && (
                  <CheckCircle className="h-4 w-4 text-green-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveGuide;