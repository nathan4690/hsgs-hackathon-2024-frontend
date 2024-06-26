'use client'

import React from 'react';
import { useState, useEffect } from 'react';

// interface BannerProps {
//   currentQuestion: number;
//   totalQuestions: number;
// }

// const Banner: React.FC<BannerProps> = ({ currentQuestion, totalQuestions }) => {
//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
//       <div className="flex items-center justify-between">
//         <button className="p-2">← Previous</button>
//         <button className="p-2">{`Question ${currentQuestion} of ${totalQuestions}`}</button>
//         <button className="p-2">Next →</button>
//       </div>
//     </div>
//   );
// };

interface BannerProps {
  currentQuestion: number;
  totalQuestions: number;
  endTime: string; // The end time as a string in ISO format
  startTime: string;
}

const Banner: React.FC<BannerProps> = ({ currentQuestion, totalQuestions, endTime, startTime }) => {
  // const [timeLeft, setTimeLeft] = useState('');
  const [timeProgress, setTimeProgress] = useState('');

  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  const calculateTimeProgress = () => {
    const totalDuration = +new Date(endTime) - +new Date(startTime);
    const timeElapsed = +new Date() - +new Date(startTime);
    return (timeElapsed / totalDuration) * 100;
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const totalDuration = +new Date(endTime) - +new Date(startTime);
      const timeElapsed = +new Date() - +new Date(startTime);

      setTimeProgress(Math.min((timeElapsed / totalDuration) * 100, 100).toString());
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="fixed bottom-0 w-full">
      <div className="w-full bg-gray-700 h-1">
        <div className="bg-green-500 h-1" style={{ width: `${timeProgress}%` }}></div>
      </div>
      <div className="bg-gray-900 text-white py-4 shadow-md">
        <div className="flex justify-between items-center px-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
            ← Previous
          </button>
          {/* <div className="text-center"> */}
          <button className="p-2">
            <p className="text-lg font-bold mb-2">Question {currentQuestion} of {totalQuestions}</p>
            <div className="bg-gray-700 w-full rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;