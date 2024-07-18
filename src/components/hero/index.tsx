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
  }, []);

  return (
    <div className='container mx-auto px-4'>
      <div className='w-full h-screen flex flex-col justify-center items-center text-white bg-seafoam'>
        <div className='flex justify-center items-center text-center w-full'>
          <div className='grid grid-cols-2 gap-2 w-full h-full'>
            {/* Image column */}
            <div className='flex justify-end items-center'>
              <Image
                src='/images/bridge.png'
                alt='Becoming American cover'
                width={width < 1024 ? 100 : 450}
                height={width < 1024 ? 100 : 550}
              />
            </div>
            {/* Text column */}
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-3xl lg:text-6xl'>
                Becoming American: <br /> A 600 Year Odyssey
              </h1>
              <h2 className='text-2xl lg:text-4xl mt-6'>
                Based On An Autobiography and Memoir <br />
                By L.K. Lennie Lee, née Chow
              </h2>
              <h4 className='max-w-xl text-2xl leading-relaxed text-left mt-6'>
                “Uncle Ron, look at what grandma wrote. It reads like an episode
                from Warrior.” “What’s Warrior?” I asked. It turned out to be a
                TV series based on a “treatment” written by Bruce Lee in the
                1970s.
              </h4>
              <h4 className='max-w-xl text-2xl leading-relaxed text-left mt-6'>
                My nephew Erik handed me a binder with a lime green cover. It
                turned out to be a manuscript titled Joke Sings, written by my
                mother, Erik’s grandmother, L K Lennie Lee, nee Chow
                (1923-2021.)
              </h4>
              <h4 className='max-w-xl text-2xl leading-relaxed text-left mt-6'>
                “Grandma Lee” had quietly passed away at age 98 after a long,
                productive life. We came upon the book while going through her
                belongings. At the top of the first page, she had written a
                note: “Grandmother Lee’s Autobiography.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
