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
    <div className='w-full bg-sky map-dots'>
      <div className='max-w-6xl mx-auto flex flex-col items-center text-center'>
        {/* Header */}
        <Link href='/Map' passHref>
          <div className='text-center px-4 py-6'>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold text-black text-shadow-lg transition-colors duration-300 underline decoration-solid underline-offset-4 cursor-pointer  hover:text-gray-700'>
              Cathcart Map <br className='hidden sm:block' />
              of San Francisco’s Chinatown
            </h1>
            <div className='mt-2 flex justify-center items-center gap-1 text-sm sm:text-base text-gray-700 sm:text-gray-700  hover:text-gray-900'>
              {/* <MapPinned className='w-4 h-4' /> */}
              <span className='font-medium'>Tap to open interactive map</span>
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className='text-xl'
              />
            </div>
          </div>
        </Link>

        <h3 className='text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4 mt-4 text-black'>
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
        <div className='text-black-700 hover:underline font-medium my-2'>
          <Link
            href='https://www.amazon.com/Gold-Mountain-Big-City-Illustrated/dp/1944903895'
            target='_blank'
          >
            <em>Gold Mountain, Big City</em> by Jim Schein
          </Link>
        </div>

        {/* Description */}
        <h3 className='text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4 mt-4 text-black'>
          Based on the work of photographer/map maker Ken Cathcart, Jim has
          produced a hand-colorized map of Chinatown in 1947 highlighting
          historically significant locations in “Dai Fou” (Big City). The map
          depicts many of the places Lennie referred to and is a wonderful
          visual aid for the target audience of Sojourners to Joke Sings...young
          people.
        </h3>

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
        <h3 className='text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4 mt-6 text-black'>
          You are invited to take a virtual tour of San Francisco Chinatown.
          Study the map, then press the button below and a series of icons will
          appear. Click on any one and a dialogue box will appear giving a
          little information about the place selected.
        </h3>

        {/* Button */}
        <Link href='/Map' passHref>
          <button className='text-blue-500 hover:text-blue-700 border border-blue-500 rounded-full px-6 py-3 bg-white flex items-center gap-2 mt-6 shadow-md hover:shadow-lg transition'>
            <span>Go to Map</span>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className='text-2xl'
            />
          </button>
        </Link>

        {/* Credit */}
        <p className='text-sm text-black mt-6'>
          Images courtesy of Schein and Schein Inc.
        </p>
      </div>
    </div>
  );
};

export default MapImage;
