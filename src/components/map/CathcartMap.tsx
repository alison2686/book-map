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
  const [width, setWidth] = useState(0);
  const [popup, setPopup] = useState<{
    visible: boolean;
    content: string;
    top: number;
    left: number;
  }>({
    visible: false,
    content: '',
    top: 0,
    left: 0,
  });

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleIconClick = (
    content: string,
    event: React.MouseEvent<SVGSVGElement>
  ) => {
    const { top, left, height, width } =
      event.currentTarget.getBoundingClientRect();
    // Adjust the popup position to be slightly below the icon
    setPopup({
      visible: true,
      content,
      top: top - 150,
      left: left - 300,
    });
  };

  return (
    <div className='container mx-auto px-4'>
      <div className='w-full min-h-screen flex justify-center items-center bg-sky overflow-hidden'>
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
            <FontAwesomeIcon
              icon={faSkull}
              className='map-icon'
              style={{ top: '40%', left: '75%', fontSize: '2rem' }}
              onClick={(e) => handleIconClick('Little Pete Must Die', e)}
            />
            <FontAwesomeIcon
              icon={faSailboat}
              className='map-icon'
              style={{ top: '85%', left: '71%', fontSize: '2rem' }}
              onClick={(e) => handleIconClick('RLS', e)}
            />
            <FontAwesomeIcon
              icon={faSquarePhone}
              className='map-icon'
              style={{ top: '76%', left: '77%', fontSize: '2rem' }}
              onClick={(e) => handleIconClick('Telephone Exchange', e)}
            />
            <FontAwesomeIcon
              icon={faShrimp}
              className='map-icon'
              style={{ top: '20%', left: '1%', fontSize: '2rem' }}
              onClick={(e) => handleIconClick('They Mystery of China Beach', e)}
            />
            <FontAwesomeIcon
              icon={faVihara}
              className='map-icon'
              style={{ top: '72%', left: '59%', fontSize: '2rem' }}
              onClick={(e) => handleIconClick('Shing Chong', e)}
            />
            <FontAwesomeIcon
              icon={faJoint}
              className='map-icon'
              style={{ top: '93%', left: '50%', fontSize: '2rem' }}
              onClick={(e) => handleIconClick('Cigars', e)}
            />
            <FontAwesomeIcon
              icon={faShirt}
              className='map-icon'
              style={{ top: '62%', left: '75%', fontSize: '2rem' }}
              onClick={(e) => handleIconClick('Chinese Laundry', e)}
            />
            <FontAwesomeIcon
              icon={faHotel}
              className='map-icon'
              style={{ top: '72%', left: '65%', fontSize: '2rem' }}
              onClick={(e) => handleIconClick('Suey Ying Tong Building', e)}
            />
            {popup.visible && (
              <div
                className='absolute bg-white text-black border border-black p-2 rounded shadow-lg'
                style={{
                  top: `${popup.top}px`,
                  left: `${popup.left}px`,
                  zIndex: 10,
                }}
              >
                {popup.content}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CathcartMap;
