import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Camera, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      message: 'Hey there, future Ansel Adams! 👋 I\'m your sarcastic-but-supportive photography buddy. Ask me anything about taking photos that don\'t look like they were taken during an earthquake! 📸',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = [
    "That's a great question! Here's the deal: {response}. Now go make some photographic magic happen! ✨",
    "Ah, the classic {topic} question! {response}. You're basically a photography genius now! 🧠📸",
    "Let me drop some knowledge on you: {response}. Your Instagram followers won't know what hit them! 💥",
    "Oh honey, {response}. Trust me, I've seen it all in the photography world! 😎📱",
    "Here's the tea ☕: {response}. Now stop overthinking and start shooting! 🎯"
  ];

  const getRandomResponse = (input: string): string => {
    const responses: { [key: string]: string[] } = {
      'lighting': [
        "Find a window, face the light, and boom - you're basically working with a professional setup!",
        "Golden hour is your best friend. It's that magical time when even your messy hair looks intentional.",
        "Avoid overhead lights unless you want to cosplay as a raccoon. Not cute.",
        "Window light is free, flattering, and doesn't require a film degree to use!"
      ],
      'composition': [
        "Rule of thirds: imagine your photo is a tic-tac-toe board and put cool stuff where lines cross!",
        "Get weird with angles! Lie on the ground, climb on a chair, confuse your neighbors - it's worth it!",
        "Leave some breathing room in your photos. Empty space isn't wasted space, it's dramatic space!",
        "Center your subject only when you want to make a bold statement. Otherwise, off-center = more interesting!"
      ],
      'blurry': [
        "Hold still like you're a statue! Your phone needs a hot second to focus and capture the magic.",
        "Clean your lens! It's probably covered in pocket lint and fingerprints. Gross but true.",
        "Tap to focus before taking the shot. Your phone isn't a mind reader (yet).",
        "If it's still blurry, you might be too close. Back up a smidge and try again!"
      ],
      'editing': [
        "Less is more! Don't make your photos look like a unicorn exploded on them.",
        "Adjust brightness and contrast first - they're like the salt and pepper of photo editing.",
        "Saturation is like hot sauce: a little goes a long way. Don't overdo it!",
        "If you're questioning if it's too much editing... it probably is. Step away from the filters!"
      ],
      'general': [
        "Practice makes progress! Even Ansel Adams probably took some questionable photos starting out.",
        "The best camera is the one you have with you. So yes, your phone counts!",
        "Don't be afraid to take 50 photos of the same thing. Digital storage is cheap, regret is expensive.",
        "Photography is like pizza - even when it's bad, it's still pretty good!"
      ]
    };

    const lowerInput = input.toLowerCase();
    let category = 'general';
    
    if (lowerInput.includes('light') || lowerInput.includes('dark') || lowerInput.includes('shadow')) {
      category = 'lighting';
    } else if (lowerInput.includes('composition') || lowerInput.includes('frame') || lowerInput.includes('angle')) {
      category = 'composition';
    } else if (lowerInput.includes('blur') || lowerInput.includes('focus') || lowerInput.includes('sharp')) {
      category = 'blurry';
    } else if (lowerInput.includes('edit') || lowerInput.includes('filter') || lowerInput.includes('app')) {
      category = 'editing';
    }

    const categoryResponses = responses[category];
    const response = categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
    const template = botResponses[Math.floor(Math.random() * botResponses.length)];
    
    return template.replace('{response}', response).replace('{topic}', category);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        message: getRandomResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <section id="chat" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-6">
            Chat with Your Photo Buddy
          </h2>
          <p className="text-xl text-white/70">
            Got questions? Need encouragement? Want someone to tell you your photos don't actually look like abstract art? I'm here! 🤖💬
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-yellow-400/20 to-pink-400/20 border-b border-white/20 p-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Camera className="h-8 w-8 text-yellow-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-white">Photography Buddy Bot</h3>
                <p className="text-white/60 text-sm">Online and ready to help!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-black'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  {message.type === 'bot' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-xs text-white/60 font-medium">Photo Buddy</span>
                    </div>
                  )}
                  <p className="font-medium leading-relaxed">{message.message}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/20 text-white p-4 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-white/60">Thinking of something witty...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/20 p-4">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about photography! (Like why your selfies look like mugshots...)"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-300 hover:to-pink-400 text-black font-bold p-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="mt-8">
          <h4 className="text-xl font-bold text-white mb-4 text-center">Quick Questions:</h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Why are my photos always blurry?",
              "How do I take better selfies?",
              "What's the rule of thirds?",
              "How to use portrait mode?",
              "Best editing apps?"
            ].map((question) => (
              <button
                key={question}
                onClick={() => setInputValue(question)}
                className="bg-white/10 hover:bg-white/20 text-white/80 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/20 hover:border-yellow-400/50"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;