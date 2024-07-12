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
  faHouseUser,
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
    const iconRect = event.currentTarget.getBoundingClientRect();
    const containerRect = event.currentTarget
      .closest('.relative-container')!
      .getBoundingClientRect();

    const popupTop = iconRect.top - containerRect.top + iconRect.height / 2; // Adjust top position to align better
    const popupLeft = iconRect.left - containerRect.left + iconRect.width + 10; // Adding 10px for some spacing

    setPopup({
      visible: true,
      content,
      top: popupTop,
      left: popupLeft,
    });
  };

  return (
    <div className='container mx-auto px-4'>
      <div className='relative-container w-full h-screen flex justify-center items-center bg-sky overflow-hidden relative'>
        <div className='flex flex-col justify-center items-center text-center w-full relative'>
          <h1 className='text-4xl lg:text-6xl font-bold text-shadow-lg p-6'>
            Cathcart Map <br /> of San Francisco’s Chinatown
          </h1>
          <div className='relative border-4 border-black relative-container'>
            <Image
              src='/images/map.jpeg'
              alt='Cathcart Map'
              width={width < 1024 ? 300 : 800}
              height={width < 1024 ? 400 : 800}
            />
            <div
              className='icon-container absolute'
              style={{ top: '40%', left: '75%' }}
            >
              <FontAwesomeIcon
                icon={faSkull}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('Little Pete Must Die', e)}
              />
            </div>
            <div
              className='icon-container absolute'
              style={{ top: '85%', left: '71%' }}
            >
              <FontAwesomeIcon
                icon={faSailboat}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('Robert Louis Stevenson', e)}
              />
            </div>
            <div
              className='icon-container absolute'
              style={{ top: '76%', left: '77%' }}
            >
              <FontAwesomeIcon
                icon={faSquarePhone}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) =>
                  handleIconClick('Chinese Telephone Exchange', e)
                }
              />
            </div>
            <div
              className='icon-container absolute'
              style={{ top: '20%', left: '1%' }}
            >
              <FontAwesomeIcon
                icon={faShrimp}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) =>
                  handleIconClick('The Mystery of China Beach', e)
                }
              />
            </div>
            <div
              className='icon-container absolute'
              style={{ top: '72%', left: '59%' }}
            >
              <FontAwesomeIcon
                icon={faVihara}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('Shing Chong', e)}
              />
            </div>
            <div
              className='icon-container absolute'
              style={{ top: '90%', left: '50%' }}
            >
              <FontAwesomeIcon
                icon={faJoint}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('Cigar', e)}
              />
            </div>
            <div
              className='icon-container absolute'
              style={{ top: '62%', left: '75%' }}
            >
              <FontAwesomeIcon
                icon={faShirt}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('First Chinese Laundry', e)}
              />
            </div>
            <div
              className='icon-container absolute'
              style={{ top: '72%', left: '65%' }}
            >
              <FontAwesomeIcon
                icon={faHotel}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('Suey ying Tong Building', e)}
              />
            </div>
            <div
              className='icon-container absolute'
              style={{ top: '22%', left: '35%' }}
            >
              <FontAwesomeIcon
                icon={faHouseUser}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) =>
                  handleIconClick('The Donaldina Cameron House', e)
                }
              />
            </div>
            {popup.visible && (
              <div
                className='absolute bg-white text-black border border-black p-2 rounded shadow-lg'
                style={{
                  top: `${popup.top}px`,
                  left: `${popup.left}px`,
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
