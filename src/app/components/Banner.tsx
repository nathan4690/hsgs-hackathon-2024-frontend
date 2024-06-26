'use client'

import React, { useState, useEffect } from 'react';

interface BannerProps {
  currentQuestion: number;
  totalQuestions: number;
  endTime: string; // The end time as a string in ISO format
  startTime: string;
}

const Banner: React.FC<BannerProps> = ({ currentQuestion, totalQuestions, endTime, startTime }) => {
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
  }, [endTime, startTime]);

  return (
    <div className="fixed bottom-0 w-full">
      <div className="w-full bg-gray-300 dark:bg-gray-700 h-1">
        <div className="bg-blue-500 h-1" style={{ width: `${timeProgress}%` }}></div>
      </div>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-4 shadow-md">
        <div className="flex justify-between items-center px-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
            ← Previous
          </button>
          <button className="p-2">
            <p className="text-lg font-bold mb-2">Question {currentQuestion} of {totalQuestions}</p>
            <div className="bg-gray-300 dark:bg-gray-700 w-full rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
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
