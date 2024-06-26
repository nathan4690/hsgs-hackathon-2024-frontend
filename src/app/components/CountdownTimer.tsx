'use client'

import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  endTime: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endTime) - +new Date();
      let timeLeft = '';

      if (difference > 0) {
        const hours = String(Math.floor(difference / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');

        timeLeft = `${hours}:${minutes}:${seconds}`;
      } else {
        timeLeft = '00:00:00';
      }

      setTimeLeft(timeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <p className="text-sm font-bold">{timeLeft}</p>
    </div>
  );
};

export default CountdownTimer;
