'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSkull,
  faSailboat,
  faSquarePhone,
  faShrimp,
  faVihara,
  faJoint,
  faShirt,
  faHotel,
} from '@fortawesome/free-solid-svg-icons';

const CathcartMap = () => {
  // Update the size of CathcartMap when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className='container mx-auto px-4'>
      <div className='w-full h-screen flex justify-center items-center bg-sky'>
        <div className='flex flex-col justify-center items-center text-center w-full'>
          <h1 className='text-4xl lg:text-6xl font-bold text-shadow-lg'>
            Cathcart Map <br /> of San Francisco’s Chinatown
          </h1>
          <div className='relative border-4 border-black'>
            <Image
              src='/images/map.jpeg'
              alt='Cathcart Map'
              width={width < 1024 ? 300 : 800}
              height={width < 1024 ? 400 : 800}
            />
            {/* Placing the icon on the image */}
            <FontAwesomeIcon
              icon={faSkull}
              className='absolute text-black'
              style={{ top: '40%', left: '75%', fontSize: '2rem' }}
              onClick={() => alert('Icon Clicked')}
            />
            <FontAwesomeIcon
              icon={faSailboat}
              className='absolute text-black'
              style={{ top: '85%', left: '71%', fontSize: '2rem' }}
              onClick={() => alert('Icon Clicked')}
            />
            <FontAwesomeIcon
              icon={faSquarePhone}
              className='absolute text-black'
              style={{ top: '76%', left: '77%', fontSize: '2rem' }}
              onClick={() => alert('Icon Clicked')}
            />
            <FontAwesomeIcon
              icon={faShrimp}
              className='absolute text-black'
              style={{ top: '20%', left: '1%', fontSize: '2rem' }}
              onClick={() => alert('Icon Clicked')}
            />
            <FontAwesomeIcon
              icon={faVihara}
              className='absolute text-black'
              style={{ top: '72%', left: '59%', fontSize: '2rem' }}
              onClick={() => alert('Icon Clicked')}
            />
            <FontAwesomeIcon
              icon={faJoint}
              className='absolute text-black'
              style={{ top: '93%', left: '50%', fontSize: '2rem' }}
              onClick={() => alert('Icon Clicked')}
            />
            <FontAwesomeIcon
              icon={faShirt}
              className='absolute text-black'
              style={{ top: '62%', left: '75%', fontSize: '2rem' }}
              onClick={() => alert('Icon Clicked')}
            />
            <FontAwesomeIcon
              icon={faHotel}
              className='absolute text-black'
              style={{ top: '72%', left: '65%', fontSize: '2rem' }}
              onClick={() => alert('Icon Clicked')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CathcartMap;
