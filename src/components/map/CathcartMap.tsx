'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CathcartMap = () => {
  //update the size of CathcartMap when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, []);

  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='w-full h-screen flex justify-center items-center bg-sky'>
          <div className='flex flex-col justify-center items-center text-center w-full'>
            <h1 className='text-4xl lg:text-6xl font-bold text-shadow-lg'>
              Cathcart Map <br /> of San Francisco’s Chinatown
            </h1>
            <div className='border-4 border-black'>
              <Image
                src='/images/map.jpeg'
                alt='Cathcart Map'
                width={width < 1024 ? 300 : 800}
                height={width < 1024 ? 400 : 800}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CathcartMap;
