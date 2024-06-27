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
}

const choices: Choice[] = [
  { letter: 'A', content: 'Choice 1' },
  { letter: 'B', content: 'Choice 2' },
  { letter: 'C', content: 'Choice 3' },
  { letter: 'D', content: 'Choice 4' },
];

const tutorial: string = `**Student-produced response directions**

▪ If you find **more than one correct answer**, enter only one answer.

▪ You can enter up to $5$ characters for a **positive** answer and up to $6$ characters 
(including the negative sign) for a **negative** answer.

▪ If your answer is a **fraction** that doesn't fit in the provided space, enter the 
decimal equivalent.

▪ If your answer is a **decimal** that doesn't fit in the provided space, enter it by 
truncating or rounding at the fourth digit.

▪ If your answer is a **mixed number** (such as $3½$), enter it as an improper fraction 
(\`7/2\`) or its decimal equivalent (\`3.5\`).

▪ Don't enter **symbols** such as a percent sign, comma, or dollar sign

**Examples**

![image](https://i.ibb.co/zFX0m27/image.png)
`

const referenceSheet: string = `![referenceSheet](https://www.quiz-maker.com/3012/CDN/90-4407427/0.png)`;

const questions = [
  { id: 1, text: `The addition sign, represented by the symbol $$+$$, is one of the fundamental operations in mathematics. It denotes the process of combining two or more numbers to form a total or sum. For example, in the expression $$2 + 3 = 5$$, the numbers $$2$$ and $$3$$ are addends, and $$5$$ is their sum.

Addition has several important properties that make it a key operation in arithmetic and algebra. One such property is **commutativity**, which states that the order of the addends does not affect the sum:

$$
a + b = b + a
$$

Another important property is **associativity**, which indicates that the way in which addends are grouped does not change the sum:

$$
(a + b) + c = a + (b + c)
$$

The addition sign also plays a critical role in defining other mathematical concepts, such as the concept of zero. The number $0$ is known as the additive identity because adding $0$ to any number does not change its value:

$$
a + 0 = a
$$

In more advanced mathematics, the addition sign is used in various contexts, including vector addition, matrix addition, and the addition of functions. Its simplicity and fundamental nature make it an essential tool for both basic arithmetic and higher-level mathematical operations.`, question: 'What is the value of 1+1?', choices:[
    { letter: 'A', content: '1' },
    { letter: 'B', content: '2' },
    { letter: 'C', content: '3' },
    { letter: 'D', content: '4' },
  ], multipleChoice: true},
  { id: 2, text:`The age of humans, or Homo sapiens, is a fascinating topic that spans both biological evolution and cultural development. Our species is believed to have emerged around 300,000 years ago in Africa. This period marks the advent of anatomically modern humans, characterized by a larger brain, upright posture, and the capacity for complex thought and communication.

Throughout history, human age has been measured in various ways. In modern society, age is typically calculated from the date of birth, with milestones like childhood, adolescence, adulthood, and old age defining different life stages. Each stage is associated with specific biological, psychological, and social changes. For instance, childhood is a time of rapid growth and learning, while old age often brings about retirement and reflection on one's life.

Anthropologically, the study of human age also includes the examination of ancient remains. By analyzing skeletal structures, scientists can estimate the age at death of individuals from past civilizations, offering insights into the life expectancy and health of those populations. For example, in prehistoric times, the average lifespan was significantly shorter due to harsh living conditions and the lack of modern medical knowledge.

Overall, the concept of age encompasses both the individual journey from birth to death and the broader evolution of our species over millennia. Understanding human age provides valuable perspectives on both our biological heritage and the cultural practices that shape our lives.`, question: 'What is your age?' , choices:[
    { letter: 'A', content: '4' },
    { letter: 'B', content: '**2**' },
    { letter: 'C', content: '*3*' },
    { letter: 'D', content: '1' },
  ], multipleChoice: true},
  { id: 3, text: `Prime numbers, represented as integers greater than $1$ that have no positive divisors other than $1$ and themselves, possess a unique allure in mathematics. They are the building blocks of all natural numbers, embodying a purity and simplicity that captivates mathematicians and enthusiasts alike.

The beauty of prime numbers lies in their fundamental role in number theory and their elusive distribution among all integers. Despite their infinite nature, primes become sparser as numbers increase, leading to intriguing patterns and gaps that continue to intrigue researchers. The distribution of primes is governed by the Prime Number Theorem, which provides insights into how primes are distributed among integers.

Moreover, primes are crucial in cryptography, forming the basis of secure encryption methods such as RSA. Their use in such applications underscores their practical importance beyond theoretical mathematics.

The fascination with primes extends to their unpredictability and their role in uncovering deeper mathematical truths. Twin primes, pairs of primes differing by $2$ (e.g., $3$ and $5$, $11$ and $13$), and prime constellations are among the many patterns that continue to be explored.

In essence, prime numbers represent both simplicity and complexity in mathematics, serving as the bedrock upon which many mathematical concepts and applications are built. Their beauty lies not only in their definition but also in the profound mysteries they continue to pose to mathematicians through the ages.
`, question: 'What is your favorite prime number?' , choices:[
    { letter: 'A', content: '$998244353$' },
    { letter: 'B', content: '$1000000007$' },
    { letter: 'C', content: '$1000069$' },
    { letter: 'D', content: '$1234567891$' },
  ], multipleChoice: true},
  {
    id: 4, text: tutorial + '\n' + referenceSheet,
    question: `Consider the polynomial function:

$$
f(x) = x^4 - 6x^3 + 11x^2 - 6x
$$

How many x-intercepts of the graph of $f(x)$?`, choices: [],
multipleChoice: false
  }
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

const QuestionForm: React.FC<QuestionProps> = ({endTime, startTime}) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);  // Example current question number
  const totalQuestions = questions.length;  // Example total number of questions
  const [answers, setAnswers] = useState(questions.map(() => ''));

  const [timeProgress, setTimeProgress] = useState('');

  const progressPercentage = ((currentQuestion+1) / totalQuestions) * 100;

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
    if (lol < questions.length - 1) {
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
            <MarkdownRenderer content={questions[currentQuestion].text} />
          </div>

          {/* Separator */}
          <div className="w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {/* Right Side - Question and Choices */}
          <div className="w-1/2 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <h2 className="mb-4"><MarkdownRenderer content={questions[currentQuestion].question} /></h2>
            <div className="space-y-4">
              {questions[currentQuestion].choices.map((choice) => (
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
              {(questions[currentQuestion].multipleChoice) ? (
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
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-4 shadow-md">
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
            <Button color="success">Submit!</Button>
          </>)}
        </div>
      </div>
    </div>
  </div>
  );
};

export default QuestionForm;
