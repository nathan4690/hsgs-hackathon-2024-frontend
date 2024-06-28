'use client'

import { useState } from "react";
import {Link, Button} from "@nextui-org/react";

/*
interface StartScreenProps{
  link: string;
  readyText: string;
  ..props;
}
*/

const StartScreen = ({ link, readyText, innerText, ...props }) => {
  const [isLoadingg, setIsLoadingg] = useState(false);

  const handleClick = async (event) => {
    setIsLoadingg(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-gray-900 dark:text-white bg-white text-gray-900">
      <h1 className="text-6xl font-bold mb-8 dark:text-gray-300">{ readyText }</h1>
      {/* <Link href="/practice/questions" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-2xl">
          Start the Test
      </Link> */}
      <Button as={Link} color="primary" href={ link } className="py-4 px-8 text-2xl" size="lg" onClick={handleClick} disabled={isLoadingg} isLoading={isLoadingg} {...props}>
          {innerText}
      </Button>
    </div>
  );
};

export default StartScreen;