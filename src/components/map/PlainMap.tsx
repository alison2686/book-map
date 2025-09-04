'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
// import { MapPinned } from 'lucide-react';

const MapImage = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateWidth = () => setWidth(window.innerWidth);
      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  return (
    <div id='map' className='w-full map-dots'>
      <div className='max-w-6xl mx-auto flex flex-col items-center text-center'>
        {/* Header */}
        <Link href='/Map' passHref>
          <div className='text-center px-4 py-6'>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-shadow-lg transition-colors duration-300 underline decoration-solid underline-offset-6 cursor-pointer  hover:text-gray-300 tracking-widest'>
              Cathcart Map <br className='hidden sm:block' />
              of San Francisco’s <br /> Chinatown
            </h1>
            <div className='mt-3 flex justify-center items-center gap-2 rounded-lg bg-[#a32b2b] border-4 border-black px-4 py-2 shadow-md hover:bg-[#8e2525] transition'>
              <span className='text-sm sm:text-base font-semibold text-white'>
                Tap to open interactive map
              </span>
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className='text-white text-lg sm:text-xl'
              />
            </div>
          </div>
        </Link>

        <h3 className='text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4 mt-4 text-white'>
          While conducting research, a very interesting book came to light by
          Jim Schein:
        </h3>

        {/* Book Image */}
        <div className='border-4 border-black bg-white shadow-comic p-2 my-6'>
          {width > 0 && (
            <Image
              src='/images/map/cathcart-title.png'
              alt='Cathcart Map'
              width={width < 1024 ? 300 : 300}
              height={width < 1024 ? 400 : 400}
              className='rounded'
            />
          )}
        </div>

        {/* Amazon Link */}
        <div className='my-3'>
          <Link
            href='https://www.amazon.com/Gold-Mountain-Big-City-Illustrated/dp/1944903895'
            target='_blank'
            className='inline-block rounded-lg bg-[#a32b2b] border-4 border-black px-4 py-2 font-bangers text-white text-base sm:text-lg tracking-wide shadow-md hover:bg-[#8e2525] hover:underline transition'
          >
            <em>Gold Mountain, Big City</em> <br /> by Jim Schein
          </Link>
        </div>

        {/* Description */}
        <p className='text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4 mt-4 text-white'>
          Based on the work of photographer/map maker Ken Cathcart, Jim has
          produced a hand-colorized map of Chinatown in 1947 highlighting
          historically significant locations in “Dai Fou” (Big City). The map
          depicts many of the places Lennie referred to and is a wonderful
          visual aid for the target audience of Sojourners to Joke Sings...young
          people.
        </p>

        {/* Main Map */}
        <div className='border-4 border-black bg-white shadow-comic p-2 my-8'>
          {width > 0 && (
            <Image
              src='/images/map/map.jpeg'
              alt='Cathcart Map'
              width={width < 1024 ? 320 : 800}
              height={width < 1024 ? 400 : 800}
              className='rounded'
            />
          )}
        </div>

        {/* Side-by-side images (stack on mobile) */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 my-6'>
          <div className='border-4 border-black bg-white shadow-comic p-2'>
            {width > 0 && (
              <Image
                src='/images/map/map2.png'
                alt='Cathcart Map 2'
                width={width < 1024 ? 300 : 510}
                height={width < 1024 ? 400 : 600}
                className='rounded'
              />
            )}
          </div>
          <div className='border-4 border-black bg-white shadow-comic p-2'>
            {width > 0 && (
              <Image
                src='/images/map/map3.png'
                alt='Cathcart Map 3'
                width={width < 1024 ? 300 : 300}
                height={width < 1024 ? 400 : 400}
                className='rounded'
              />
            )}
          </div>
        </div>

        {/* Call to Action */}
        <p className='text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4 mt-6 text-white'>
          You are invited to take a virtual tour of San Francisco Chinatown.
          Study the map, then press the button below and a series of icons will
          appear. Click on any one and a dialogue box will appear giving a
          little information about the place selected.
        </p>

        {/* Button */}
        <Link href='/Map' passHref>
          <button className='font-bangers text-[#806517] hover:text-gray-700 border border-gray-900 rounded-full px-6 py-3 bg-white flex items-center gap-2 mt-6 shadow-md hover:shadow-lg transition'>
            <span>Go to Map</span>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className='text-2xl'
            />
          </button>
        </Link>

        {/* Credit */}
        <p className='text-sm text-white mt-6 py-8'>
          Images courtesy of Schein and Schein Inc.
        </p>
      </div>
    </div>
  );
};

export default MapImage;
