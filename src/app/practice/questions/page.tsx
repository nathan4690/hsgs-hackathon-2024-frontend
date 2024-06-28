'use client'

import Head from 'next/head';
import Header from '../../components/Header';
import QuestionForm from '../../components/QuestionForm';
import Banner from '../../components/Banner'
import CountdownTimer from '@/app/components/CountdownTimer';
import CalculatorLoad from '@/app/components/CalculatorLoad';
import React, { useState,useEffect } from 'react';
import BreakTime from '@/app/components/BreakTime';
import { useRouter } from 'next/navigation';
import { NextFetchEvent } from 'next/server';

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

<div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs dark:text-white tracking-wider"
            >
              Answer
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs dark:text-white tracking-wider"
            >
              Acceptable ways to enter answer
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium dark:text-white tracking-wider"
            >
              Unacceptable: will NOT receive credit
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">3.5</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-white">
              <div>3.5</div>
              <div>3.50</div>
              <div>7/2</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-white">
              <div>31/2</div>
              <div>3 1/2</div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">⅔</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-white">
              <div>2/3</div>
              <div>.6666</div>
              <div>.6667</div>
              <div>0.666</div>
              <div>0.667</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-white">
              <div>0.66</div>
              <div>.66</div>
              <div>0.67</div>
              <div>.67</div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">−⅓</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-white">
              <div>−1/3</div>
              <div>−.3333</div>
              <div>−0.333</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-white">
              <div>−.33</div>
              <div>−0.33</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
`

const referenceSheet: string = `![referenceSheet](https://www.quiz-maker.com/3012/CDN/90-4407427/0.png)`;

const questionn = [
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

const questions = [
  questionn, questionn, [], questionn, questionn
]

const timeStamps = [0, 32*60000, 32*60000, 10*60000, 35*60000, 35*60000, 99824435289787]

const Home: React.FC = () => {
  const router = useRouter();
  const [session, setSession2] = useState(1);
  const currentQuestion = 1;  // Example current question number
  const totalQuestions = 10;  // Example total number of questions
  const [startTime, setStartTime] = useState(new Date().toISOString()); // Example start time
  const [endTime, setEndTime] = useState(new Date(new Date().getTime() + timeStamps[1]).toISOString());

  const setSession = (nxtSession: number) => {
    if(nxtSession == 6) router.push("/practice/finish");
    // const currentEndTime = endTime;
    const nextStartTime = new Date().getTime() + 200;
    setStartTime(new Date(nextStartTime).toISOString());
    setEndTime(new Date(nextStartTime + timeStamps[nxtSession]).toISOString());
    setSession2(nxtSession);
  }

  const sessionChange = () => {
    const nextSession = session + 1;
    setSession(nextSession);
  }
  const fetchQuestion = () => {
    return questions;
  }
  return (
    <div className="bg-gray-100 dark:dark dark:bg-gray-900 text-white min-h-screen flex flex-col">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      {(session != 3) ? (
        <>
        <CountdownTimer endTime={endTime} />
        <CalculatorLoad />
        </>
      ) : (<></>)}
      <div className="flex-grow">
        {(session == 6) ? (<></>) : ((session == 3) ? (<><BreakTime breakEndTime={new Date(new Date().getTime() + 10 * 60 * 1000).toISOString()} sessionChange={setSession}/></>) : (
          <>
          <QuestionForm endTime={endTime} startTime={ startTime } questions={ fetchQuestion() } session={ session-1 } sessionChange={ sessionChange }/>
          </>
        ))}
        
      </div>
      {/* <Banner currentQuestion={currentQuestion} totalQuestions={totalQuestions} endTime={endTime} startTime={ startTime }/> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
