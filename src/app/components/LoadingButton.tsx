'use client'

import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

const LoadingButton = ({ children, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event) => {
    setIsLoading(true);
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      isLoading={isLoading}
      {...props}
    >
      { children }
    </Button>
  );
};

export default LoadingButton;