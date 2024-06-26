'use client'

import React, { useEffect, useState, useRef } from 'react';
import CalculatorIcon from '../components/calculatorIcon';
import { Button } from '@nextui-org/react';

const CalculatorLoad: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragItem = useRef<null | HTMLDivElement>(null);
  const dragItemPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dragItem.current = e.target as HTMLDivElement;
    dragItemPosition.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragItem.current) return;

    setPosition({
      x: e.clientX - dragItemPosition.current.x,
      y: e.clientY - dragItemPosition.current.y,
    });
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    dragItem.current = null;
  };

  const showWindow = () => {
    const windowName = 'newWindow';
    const existingWindow = window.open('https://www.desmos.com/testing/cb-digital-sat/graphing', windowName, `width=400,height=600`);
    
    if (existingWindow && !existingWindow.closed) {
      existingWindow.focus();
    } else {
      window.open("https://www.desmos.com/testing/cb-digital-sat/graphing", windowName, `width=400,height=600`);
    }
    // window.open("","_blank")
  }
  return (
    <div>
      <Button isIconOnly color="danger" aria-label="Like" className='fixed bottom-28 right-4' size="lg" onClick={showWindow}>
          <CalculatorIcon />
      </Button> 
      {/* <div
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: '400px',
          height: '600px',
        }}
        className="bg-gray-300 dark:bg-gray-700 rounded-lg shadow-lg cursor-move"
        id="calculator" 
      ></div>
      <script>
        var elt = document.getElementById('calculator');
        var calculator = Desmos.GraphingCalculator(elt);
      </script> */}
    </div>
  );
};

export default CalculatorLoad;
