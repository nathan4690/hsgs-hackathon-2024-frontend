'use client'
import React, { useState } from 'react';
// import Link from 'next/link';
import {Link, Button} from "@nextui-org/react";
import StartScreen from './StartScreen';

const MathCover: React.FC = () => {
  const [isLoadingg, setIsLoadingg] = useState(false);

  const handleClick = () => {
    setIsLoadingg(true);
    // Simulate a network request or other asynchronous action
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-900 text-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-gray-300 mb-6">Digital SAT Reading & Writing Practice Test Format</h2>
                <div className="divide-y divide-gray-800">
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">1. Modules And Timing:</h3>
                        <p className="text-lg text-gray-400">
                        The digital SAT Reading & Writing test consists of two modules. <br></br>
                        Each module contains 27 questions. <br></br>
                        Each module must be completed in 32 minutes, giving a total of 64 minutes for the entire Reading & Writing section. <br></br>
                        </p>
                    </div>
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">2. Question Types and Passage Lengths:</h3>
                        <p className="text-lg text-gray-400">
                        The test includes a variety of question types, such as multiple-choice questions that ask students to interpret, synthesize, and use evidence from a range of texts. 
                        The passages are shorter compared to the traditional SAT, allowing for more focused questions on specific aspects of the text. 
                        Passages cover a range of topics, including literature, history, social studies, and science.
                        </p>
                    </div>
                </div>
            </div>
      <StartScreen link='/practice/questions' readyText="Digital SAT Reading & Writing Practice Test" innerText="Start the test" />
    </div>
  );
};

export default MathCover;
