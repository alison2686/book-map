'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AboutCard = () => {
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
      <div className='comic-dots w-full h-screen flex flex-col justify-center items-center text-white bg-seafoam'>
        <div className='flex justify-center items-center text-center w-full'>
          <div className='grid grid-cols-2 gap-2 w-full h-full'>
            {/* Image column */}
            <div className='flex justify-end items-center'>
              <Image
                src='/images/ron-lennie.jpeg'
                alt='Becoming American cover'
                width={width < 1024 ? 100 : 450}
                height={width < 1024 ? 100 : 550}
              />
            </div>
            {/* Text column */}
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-4xl lg:text-6xl p-6'>About the Authors</h1>
              <h4 className='max-w-xl text-2xl leading-relaxed text-left'>
                Lennie Lee and son Ron Lee had similar careers as real estate
                investors and public school teachers. In her spare time, she
                wrote an extensive autobiography and memoir that included
                detailed observations of life in San Francisco’s Chinatown
                beyond the facade of tourism.
              </h4>
              <h4 className='max-w-xl text-2xl leading-relaxed text-left pt-6'>
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
