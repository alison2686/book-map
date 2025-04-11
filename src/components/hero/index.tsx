'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className='w-full bg-electricBlue text-white comic-dots'>
      <div className='h-screen flex items-center justify-center lg:h-screen sm:min-h-[90vh] px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl'>
          {/* Image */}
          <div className='flex justify-center items-center'>
            <div className='border-4 border-black shadow-comic bg-black rounded-2xl'>
              <Image
                src='/images/hero/book-cover.jpeg'
                alt='Becoming American cover'
                width={width < 1024 ? 250 : 300}
                height={width < 1024 ? 350 : 400}
                className='rounded'
              />
            </div>
          </div>

          {/* Speech Bubble Text */}
          <div className='relative'>
            <div className='bg-white text-black p-6 rounded-2xl border-4 border-black shadow-comic font-comic leading-relaxed text-base sm:text-lg md:text-xl'>
              <p>
                Family Matriarch LK Lennie Lee (1923–2021) lived a long and
                productive life. While sorting through her belongings, we
                discovered a book she had written about her life and times —
                plus those of our forebears. At the top of the first page, there
                was a handwritten note:
              </p>
              <p className='italic mt-4'>
                “Grandmother Lee’s Autobiography.
                <br /> Note: Needs Corrections and upgrading”
              </p>
              <p className='mt-4'>
                Our family began reviewing her work expecting conventional tales
                — the Gold Rush, the railroads — but instead, we found
                astonishing stories. Lennie claimed our ancestors inspired
                Robert Louis Stevenson’s <em>Treasure Island</em>.
              </p>
              <p className='mt-4 italic'>
                <em>Sojourners To Joke Sings: Tales of Chinatown and Beyond</em>{' '}
                reveals what we uncovered while exploring her claims.
              </p>
            </div>

            {/* Speech bubble pointer */}
            {/* <div className='absolute -left-6 top-10 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-white border-r-4 border-r-black'></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
