'use client'

import React, { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';


interface Choice {
  letter: string;
  content: string;
}

const choices: Choice[] = [
  { letter: 'A', content: 'Choice 1' },
  { letter: 'B', content: 'Choice 2' },
  { letter: 'C', content: 'Choice 3' },
  { letter: 'D', content: 'Choice 4' },
];


const markdownContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis diam nec purus viverra, nec interdum mi fermentum. Fusce vel bibendum dolor, a dictum ex. Vivamus sit amet lorem euismod, venenatis elit et, varius risus. Nam eget arcu felis. Nulla dictum nunc at nisl dignissim, ac tincidunt nisl varius. Aenean mollis magna et odio ullamcorper, ac vehicula tortor dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Lam **khong** *bu* <u>DAU</u>

Chung ta hay cung nhau \`lam toan\`

$$$l_am \\sum_{o=0}^{\\sigma} k^o\\times b_{u_{u}} \\ldots \\mathbb{DAU}$$$

$$$\\mathcal{B} = \\{B_{\\alpha} \\in \\mathcal{T}\\, |\\,  U = \\bigcup B_{\\alpha} \\forall U \\in \\mathcal{T} \\}$$$

Random images

![meth](https://espresso.codeforces.com/309c87a198fadaf6d39921da3d6094d78635d3b8.png)
`;

const QuestionForm: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const currentQuestion = 1;  // Example current question number
  const totalQuestions = 10;  // Example total number of questions

  const handleChoiceClick = (letter: string) => {
    setSelectedChoice(letter);
  };

  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Main Content */}
      <div className="flex flex-grow overflow-auto">
        <div className="w-1/2 p-4 bg-gray-800">
          <MarkdownRenderer content={markdownContent} />
        </div>

        {/* Separator */}
        <div className="w-0.5 bg-gray-300"></div>

        {/* Right Side - Question and Choices */}
        <div className="w-1/2 p-4 bg-gray-800 text-white">
          <h2 className="text-2xl font-bold mb-4">What is your favorite color?</h2>
          <div className="space-y-4">
            {choices.map((choice) => (
              <div
                key={choice.letter}
                className={`flex cursor-pointer rounded-lg overflow-hidden border-2 ${
                  selectedChoice === choice.letter ? 'border-green-500' : 'border-gray-600'
                }`}
                onClick={() => handleChoiceClick(choice.letter)}
              >
                <div className="w-12 p-4 bg-gray-800 text-center text-lg font-bold">
                  {choice.letter}
                </div>
                <div className="flex-grow p-4 bg-gray-700">
                  {choice.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
