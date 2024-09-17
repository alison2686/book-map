'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const MapImage = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Check if running in client-side
    if (typeof window !== 'undefined') {
      const updateWidth = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
      };

      updateWidth();
      window.addEventListener('resize', updateWidth);

      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  return (
    <div className='container mx-auto px-4 overflow-visible'>
      <div className='map-dots w-full h-full flex justify-center items-center bg-sky'>
        <div className='flex flex-col justify-center items-center text-center w-full'>
          <h1 className='text-4xl lg:text-6xl font-bold text-shadow-lg p-6'>
            Cathcart Map <br /> of San Francisco’s Chinatown
          </h1>
          <h3 className='text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4 mt-4'>
            While conducting research, a very interesting book came to light by
            Jim Schein:
          </h3>
          <div className='border-4 border-black relative-container overflow-visible m-2'>
            {width > 0 && (
              <Image
                src='/images/map/cathcart-title.png'
                alt='Cathcart Map'
                width={width < 1024 ? 300 : 300}
                height={width < 1024 ? 400 : 400}
              />
            )}
          </div>
          <div className='text-blue-700 hover:underline'>
            <Link
              href='https://www.amazon.com/Gold-Mountain-Big-City-Illustrated/dp/1944903895'
              passHref
            >
              <em>Gold Mountain, Big City</em> by Jim Schein
            </Link>
          </div>
          <h3 className='text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4 mt-4'>
            Based on the work of photographer/map maker Ken Cathcart, Jim has
            produced a hand-colorized map of Chinatown in 1947 highlighting
            historically significant locations in “Dai Fou” (Big City). The map
            depicts many of the places Lennie referred to and is a wonderful
            visual aid for the target audience of Becoming American...:: young
            people.
          </h3>
          <div className='border-4 border-black relative-container overflow-visible m-8'>
            {width > 0 && (
              <Image
                src='/images/map.jpeg'
                alt='Cathcart Map'
                width={width < 1024 ? 300 : 800}
                height={width < 1024 ? 400 : 800}
              />
            )}
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div className='border-4 border-black relative-container overflow-visible m-8'>
              {width > 0 && (
                <Image
                  src='/images/map/map2.png'
                  alt='Cathcart Map'
                  width={width < 1024 ? 300 : 510}
                  height={width < 1024 ? 400 : 600}
                />
              )}
            </div>
            <div className='border-4 border-black relative-container overflow-visible m-8'>
              {width > 0 && (
                <Image
                  src='/images/map/map3.png'
                  alt='Cathcart Map'
                  width={width < 1024 ? 300 : 300}
                  height={width < 1024 ? 400 : 400}
                />
              )}
            </div>
          </div>
          <h3 className='text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4 mt-4'>
            You are invited to take a virtual tour of San Francisco Chinatown.
            Study the map, then press the button below and a series of icons
            will appear. Click on any one and a dialogue box will appear giving
            a little information about the place selected.
          </h3>
          <Link href='/Map' passHref>
            <button className='text-blue-500 hover:text-blue-700 border border-blue-500 rounded-full p-3 bg-white m-5'>
              <span>Go to Map</span>
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className='text-2xl pl-2 align-middle'
              />
            </button>
          </Link>
          {/* Credit Section */}
          <p className='text-md text-gray-600 p-4'>
            Images courtesy of Schein and Schein Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapImage;
