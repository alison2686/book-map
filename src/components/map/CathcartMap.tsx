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
          <Image
            src='/images/map.jpeg'
            alt='Cathcart Map'
            width={width < 1024 ? '300' : '800'}
            height={width < 1024 ? '400' : '800'}
            // className='relative'
          />
        </div>
      </div>
    </>
  );
};

export default CathcartMap;
