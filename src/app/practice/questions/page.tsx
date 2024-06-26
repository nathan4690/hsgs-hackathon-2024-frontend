'use client'

import Head from 'next/head';
import Header from '../../components/Header';
import QuestionForm from '../../components/QuestionForm';
import Banner from '../../components/Banner'
import CountdownTimer from '@/app/components/CountdownTimer';
import CalculatorLoad from '@/app/components/CalculatorLoad';

const Home: React.FC = () => {
  const currentQuestion = 1;  // Example current question number
  const totalQuestions = 10;  // Example total number of questions
  const startTime = '2024-06-26T15:30:00Z'; // Example start time
  const endTime = '2024-06-26T16:30:00Z';
  return (
    <div className="bg-gray-100 dark:dark dark:bg-gray-900 text-white min-h-screen flex flex-col">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <CountdownTimer endTime={endTime} />
      <CalculatorLoad />
      <div className="flex-grow">
        <QuestionForm endTime={endTime} startTime={ startTime }/>
      </div>
      {/* <Banner currentQuestion={currentQuestion} totalQuestions={totalQuestions} endTime={endTime} startTime={ startTime }/> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
