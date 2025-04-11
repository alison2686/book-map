'use client';
import { useState, useEffect } from 'react';

const Button = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  useEffect(() => {
    if (showMessage) {
      const timeout = setTimeout(() => {
        setShowMessage(false);
      }, 3000); // hides after 3 seconds
      return () => clearTimeout(timeout);
    }
  }, [showMessage]);

  return (
    <div className='relative'>
      <button
        onClick={handleClick}
        className='h-12 rounded-lg bg-white font-bold px-5 hover:bg-yellow-200 transition-colors'
      >
        Purchase the Book
      </button>

      {showMessage && (
        <div className='absolute top-full mt-2 w-max px-4 py-2 text-black border-4 border-black rounded-lg bg-eventYellow shadow-comic font-comic text-sm sm:text-base'>
          📚 Book available for purchase soon!
        </div>
      )}
    </div>
  );
};

export default Button;
