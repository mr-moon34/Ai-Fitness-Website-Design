import React from 'react';
import { Dumbbell } from 'lucide-react';

const GymLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-opacity-95">
      {/* Central animation container */}
      <div className="relative mb-8">
        {/* Side dumbbells */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2">
          <div className="animate-bounce-slow">
            <Dumbbell className="w-12 h-12 text-purple-500 rotate-45" />
          </div>
        </div>
        <div className="absolute -right-16 top-1/2 -translate-y-1/2">
          <div className="animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <Dumbbell className="w-12 h-12 text-blue-500 -rotate-45" />
          </div>
        </div>
        
        {/* Central element */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md animate-pulse"></div>
          <div className="relative bg-gray-900 rounded-full p-4">
            <div className="animate-bounce">
              <Dumbbell className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Text elements */}
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        AI Fitness Loading
      </h2>
      
      {/* Loading dots */}
      <div className="flex items-center gap-2 mb-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Motivational text */}
      <p className="text-gray-400 animate-pulse">
        Preparing your AI workout experience...
      </p>
    </div>
  );
};

export default GymLoader;