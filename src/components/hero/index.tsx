'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className='container mx-auto px-4'>
      <div className='w-full min-h-screen flex flex-col justify-center items-center text-white bg-seafoam'>
        <div className='flex justify-center items-center text-center w-full p-4 sm:p-8 mt-10 sm:mt-20'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 w-full lg:w-3/4 h-full'>
            {/* Image column */}
            <div className='flex justify-center lg:justify-center items-center'>
              <Image
                src='/images/bookcover.png'
                alt='Becoming American cover'
                width={width < 1024 ? 250 : 350}
                height={width < 1024 ? 350 : 450}
                className='w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'
              />
            </div>
            {/* Text column */}
            <div className='flex flex-col justify-center items-center lg:items-start'>
              <h4 className='hero-text text-lg sm:text-xl md:text-2xl leading-relaxed'>
                Family Matriarch LK Lennie Lee (1923-2021) had lived a long and
                productive life. While sorting through her belongings, we
                discovered a book she had written about her life and times plus
                those of our forebears. At the top of the first page, there was
                a handwritten note:
              </h4>
              <h4 className='hero-text text-lg sm:text-xl md:text-2xl leading-relaxed italic'>
                “Grandmother Lee’s Autobiography.
                <br /> Note: Needs Corrections and upgrading”
              </h4>
              <h4 className='hero-text text-lg sm:text-xl md:text-2xl leading-relaxed'>
                Our family dutifully began to go over her work expecting
                conventional tales. Perhaps they came for the 1849 Gold Rush, or
                to work on the railroads. Instead, we found astonishing stories.
                For example, Lennie claimed our ancestors’ seafaring stories
                were in part, the inspiration for Robert Louis Stevenson’s
                iconic adventure novel <em>Treasure Island</em>.
              </h4>
              <h4 className='hero-text text-lg sm:text-xl md:text-2xl leading-relaxed'>
                <em>Becoming American: a 600 Year Odyssey</em> chronicles the
                interesting facts and stories found while working to confirm the
                plausibility of Lennie’s amazing tales.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
