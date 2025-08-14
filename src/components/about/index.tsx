'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AboutCard = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div>
      {' '}
      {/* Info Banner */}
      <div className='w-full bg-eventYellow border-y-4 border-black py-4 px-6 text-center font-comic text-black text-base sm:text-lg md:text-xl tracking-wide'>
        📖 <strong>Book Coming August 25th!</strong>
        &nbsp; — &nbsp;
        <a
          href='/Contact'
          className='underline underline-offset-2 hover:text-electricBlue transition-colors '
        >
          Signup to receive updates here
        </a>
      </div>
      <div className='w-full bg-electricBlue text-white comic-dots px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex items-center justify-center'>
        <div className='w-full max-w-6xl'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            {/* Image column */}
            <div className='flex justify-center items-center'>
              <div className='border-4 border-black shadow-comic bg-black rounded-2xl'>
                <Image
                  src='/images/about/ron-lennie.jpeg'
                  alt='Ron and Lennie Lee'
                  width={width < 1024 ? 250 : 450}
                  height={width < 1024 ? 300 : 550}
                  className='rounded'
                />
              </div>
            </div>

            {/* Text column */}
            <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
              <h1 className='text-3xl tracking-wider sm:text-4xl lg:text-5xl font-bold mb-6 font-comic'>
                About the Authors
              </h1>
              <h4 className='text-base sm:text-lg lg:text-xl leading-relaxed font-comic max-w-xl'>
                Lennie Lee and son Ron Lee had similar careers as real estate
                investors and public school teachers. In her spare time, she
                wrote an extensive autobiography and memoir that included
                detailed observations of life in San Francisco’s Chinatown
                beyond the facade of tourism.
              </h4>
              <h4 className='text-base sm:text-lg lg:text-xl leading-relaxed mt-6 font-comic max-w-xl'>
                Ron spent his free time advocating for a variety of issues
                involving Asian American Native Hawaiian Pacific Islanders. At
                Lennie’s request he was directed, along with his two daughters
                and nephews, to edit and add to her work. The result is an
                extraordinary adventure story and a description of the entire
                Chinese diaspora.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
