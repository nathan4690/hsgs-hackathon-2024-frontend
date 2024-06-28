'use client'

import MarkdownRenderer from '../components/MarkdownRenderer';
import calculatorIcon from '../components/calculatorIcon';
import React, { useState, useEffect } from 'react';
import { Button, Input } from '@nextui-org/react';

interface Choice {
  letter: string;
  content: string;
}

interface QuestionProps {
  endTime: string; // The end time as a string in ISO format
  startTime: string;
  questions: {
      id: number;
      text: string;
      question: string;
      choices: {
          letter: string;
          content: string;
      }[];
      multipleChoice: boolean;
  }[][],
  session: number, 
  sessionChange: () => void
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

const QuestionForm: React.FC<QuestionProps> = ({endTime, startTime, questions, session, sessionChange}) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);  // Example current question number
  const [totalQuestions, setTotalQuestions] = useState(questions[session].length);  // Example total number of questions
  const [answers, setAnswers] = useState(questions[session].map(() => ''));

  const [timeProgress, setTimeProgress] = useState('');

  const progressPercentage = ((currentQuestion+1) / totalQuestions) * 100;

  const calculateTimeProgress = () => {
    const totalDuration = +new Date(endTime) - +new Date(startTime);
    const timeElapsed = +new Date() - +new Date(startTime);
    return (timeElapsed / totalDuration) * 100;
  };

  const submitWork = () => {
    // Do something here
    // cooooook your dish here
    // Then change the session...
    setSelectedChoice(null);
    setCurrentQuestion(0);
    sessionChange();
    setTotalQuestions(questions[session].length);
    setAnswers(questions[session].map(() => ''));
  }

  useEffect(() => {
    // const calculateTimeLeft = 
    
    const timer = setInterval(() => {
      const totalDuration = +new Date(endTime) - +new Date(startTime);
      const timeElapsed = +new Date() - +new Date(startTime);

      if(timeElapsed > totalDuration){
        clearInterval(timer);
        submitWork();
      }

      setTimeProgress(Math.min((timeElapsed / totalDuration) * 100, 100).toString());
    }, 1000);
    console.log("Uoc j manh nhu ngai");

    return () => clearInterval(timer);
  }, [endTime, startTime, session]);

  const handleAnswerChange = (newQuestion: number, newChoice: string | null) => {
    // const newQuestion = currentQuestion;
    const newAnswers = [...answers];
    if(newChoice) newAnswers[newQuestion] = newChoice;
    setAnswers(newAnswers);
    return newAnswers;
  };

  const handleNextQuestion = () => {
    const lol = currentQuestion;
    const stuff = handleAnswerChange(lol, selectedChoice);
    if (lol < questions[session].length - 1) {
      setCurrentQuestion(lol + 1);
    }
    console.log(stuff);
    setSelectedChoice(stuff[lol+1]);
  };

  const handlePrevQuestion = () => {
    const lol = currentQuestion;
    const stuff = handleAnswerChange(lol, selectedChoice);
    if (lol > 0) {
      setCurrentQuestion(lol - 1);
    }
    setSelectedChoice(stuff[lol-1]);
  };

  const handleChoiceClick = (letter: string) => {
    setSelectedChoice(letter);
  };

  const handleIChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChoice(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen pb-20">
        {/* Main Content */}
        <div className="flex flex-grow overflow-auto">
          <div className="w-1/2 p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
            <MarkdownRenderer content={questions[session][currentQuestion].text} />
          </div>

          {/* Separator */}
          <div className="w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {/* Right Side - Question and Choices */}
          <div className="w-1/2 p-4 bg-white dark:bg-gray-800 dark:text-white dark:text-white">
            <h2 className="mb-4"><MarkdownRenderer content={questions[session][currentQuestion].question} /></h2>
            <div className="space-y-4">
              {questions[session][currentQuestion].choices.map((choice) => (
                <div
                  key={choice.letter}
                  className={`flex cursor-pointer rounded-lg overflow-hidden border-2 ${
                    selectedChoice === choice.letter ? 'border-blue-500' : 'border-gray-600 dark:border-gray-400'
                  }`}
                  onClick={() => handleChoiceClick(choice.letter)}
                >
                  <div className="w-12 p-4 bg-gray-200 dark:bg-gray-800 text-center text-lg font-bold">
                    {choice.letter}
                  </div>
                  <div className="flex-grow p-4 bg-gray-100 dark:bg-gray-700">
                    {<MarkdownRenderer content={choice.content} />}
                  </div>
                </div>
              ))}
              {(questions[session][currentQuestion].multipleChoice) ? (
                <></>
              ) : ( <>
                <h2 className="mb-4">Your answer is: <Input type="text" value={selectedChoice} onChange={handleIChange} /></h2>
              </> )}
            </div>
          </div>
        </div>
      </div>
      {/* troll */}
      <div className="fixed bottom-0 w-full">
        <div className="w-full bg-gray-300 dark:bg-gray-700 h-1">
          <div className="bg-blue-500 h-1" style={{ width: `${timeProgress}%` }}></div>
        </div>
        <div className="bg-white dark:bg-gray-900 dark:text-white dark:text-white py-4 shadow-md">
          <div className="flex justify-between items-center px-4">
            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              ← Previous
            </button> */}
            <Button color="primary" onClick={handlePrevQuestion} disabled={(currentQuestion == 0)}>← Previous</Button>
            <button className="p-2">
              <p className="text-lg font-bold mb-2">Question {currentQuestion+1} of {totalQuestions}</p>
              <div className="bg-gray-300 dark:bg-gray-700 w-full rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </button>
            {(currentQuestion != (totalQuestions - 1)) ? (
            <>
              <Button color="primary" onClick={handleNextQuestion}>Next →</Button>
            </>) : (<>
              <Button color="success" onClick={ submitWork }>Submit!</Button>
            </>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
