'use client'

import React, { useState } from 'react';

interface ProblemNavigatorProps {
  totalProblems: number;
  answeredProblems: number[];
  currentProblem: number;
  onProblemSelect: (problemNumber: number) => void;
}

const ProblemNavigator: React.FC<ProblemNavigatorProps> = ({
  totalProblems,
  answeredProblems,
  currentProblem,
  onProblemSelect,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleVisibility}
        className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        {isVisible ? 'Hide Navigator' : 'Show Navigator'}
      </button>
      {isVisible ? (
        <><div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Problem Navigator</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Click on a problem number to navigate. Problems you've answered are highlighted in green. The current problem
            is highlighted in yellow.
          </p>
          <div className="grid grid-cols-5 gap-2">
            {[...Array(totalProblems)].map((_, index) => {
              const problemNumber = index + 1;
              const isAnswered = answeredProblems.includes(problemNumber);
              const isCurrent = problemNumber === currentProblem;

              let bgColor = 'bg-gray-300';
              if (isAnswered) bgColor = 'bg-green-500';
              if (isCurrent) bgColor = 'bg-yellow-500';

              return (
                <button
                  key={problemNumber}
                  onClick={() => onProblemSelect(problemNumber)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${bgColor} text-white`}
                >
                  {problemNumber}
                </button>
              );
            })}
          </div>
        </div></>
      ) : (<></>)}
    </div>
  );
};

export default ProblemNavigator;