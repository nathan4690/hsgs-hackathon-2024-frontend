'use client'

import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';

interface BreakTimeProps {
  breakEndTime: string; // ISO timestamp of when the break ends
  sessionChange: (value: React.SetStateAction<number>) => void;
}

const BreakTime: React.FC<BreakTimeProps> = ({ breakEndTime, sessionChange }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

  const handleContinue = () => {
    // Logic to continue the test
    console.log('Continuing the test...');
    sessionChange(4);
  };

  useEffect(() => {
    const endTime = new Date(breakEndTime).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      setTimeLeft(distance);

      if (distance <= 0) {
        clearInterval(interval);
        // setIsButtonActive(true);
        handleContinue();
      }

      if (distance <= 540000) {
        setIsButtonActive(true);
      }else{
        setIsButtonActive(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [breakEndTime]);

  const formatTimeLeft = (milliseconds: number) => {
    const minutes = String(Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((milliseconds % (1000 * 60)) / 1000)).padStart(2, '0');
    return `${minutes}m ${seconds}s`;
  };

  return (
    <div className="dark:dark flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="p-8 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-bold mb-4">Break Time</h1>
        <p className="text-xl mb-6">Take a break in your DSAT test</p>
        <p className="text-xl mb-6">You need to wait at least 1 minute to continue</p>
        <div className="text-4xl font-bold mb-4">
          {timeLeft > 0 ? formatTimeLeft(timeLeft) : '00m 00s'}
        </div>
        <Button
          onClick={handleContinue}
          disabled={!isButtonActive}
          // isLoading={isButtonActive}
          // className={`px-6 py-3 rounded-md text-white ${isButtonActive ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
        >
          Continue Test
        </Button>
      </div>
    </div>
  );
};

export default BreakTime;