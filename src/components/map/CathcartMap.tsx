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
import PopupCard from '../popup';
import { PopupData } from '../popup/data';

interface PopupCardProps {
  title: string;
  subtitle: string;
}

interface PopupState {
  visible: boolean;
  content: PopupCardProps | null;
  top: number;
  left: number;
}

const CathcartMap = () => {
  const [width, setWidth] = useState(0);
  const [popup, setPopup] = useState<PopupState>({
    visible: false,
    content: null,
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
    id: string,
    event: React.MouseEvent<SVGSVGElement>
  ) => {
    const dataItem = PopupData.find((item) => item.id === id);
    if (!dataItem) return;

    const iconRect = event.currentTarget.getBoundingClientRect();
    const containerRect = event.currentTarget
      .closest('.relative-container')!
      .getBoundingClientRect();

    const popupTop = iconRect.top - containerRect.top + iconRect.height / 2;
    const popupLeft = iconRect.left - containerRect.left + iconRect.width + 10;

    setPopup({
      visible: true,
      content: { title: dataItem.title, subtitle: dataItem.subtitle },
      top: popupTop,
      left: popupLeft,
    });
  };

  return (
    <div className='container mx-auto px-4 overflow-visible'>
      <div className='w-full h-screen flex justify-center items-center bg-sky'>
        <div className='flex flex-col justify-center items-center text-center w-full'>
          <h1 className='text-4xl lg:text-6xl font-bold text-shadow-lg p-6'>
            Cathcart Map <br /> of San Francisco’s Chinatown
          </h1>
          <div className='border-4 border-black relative-container overflow-visible'>
            <Image
              src='/images/map.jpeg'
              alt='Cathcart Map'
              width={width < 1024 ? 300 : 800}
              height={width < 1024 ? 400 : 800}
            />
            <div className='icon-container' style={{ top: '40%', left: '75%' }}>
              <FontAwesomeIcon
                icon={faSkull}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('skull', e)}
              />
            </div>
            <div className='icon-container' style={{ top: '85%', left: '71%' }}>
              <FontAwesomeIcon
                icon={faSailboat}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('sailboat', e)}
              />
            </div>
            <div className='icon-container' style={{ top: '76%', left: '77%' }}>
              <FontAwesomeIcon
                icon={faSquarePhone}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('phone', e)}
              />
            </div>
            <div className='icon-container' style={{ top: '20%', left: '1%' }}>
              <FontAwesomeIcon
                icon={faShrimp}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('beach', e)}
              />
            </div>
            <div className='icon-container' style={{ top: '72%', left: '59%' }}>
              <FontAwesomeIcon
                icon={faVihara}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('shingchong', e)}
              />
            </div>
            <div className='icon-container' style={{ top: '90%', left: '50%' }}>
              <FontAwesomeIcon
                icon={faJoint}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('cigar', e)}
              />
            </div>
            <div className='icon-container' style={{ top: '62%', left: '75%' }}>
              <FontAwesomeIcon
                icon={faShirt}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('laundry', e)}
              />
            </div>
            <div className='icon-container' style={{ top: '72%', left: '65%' }}>
              <FontAwesomeIcon
                icon={faHotel}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('tong', e)}
              />
            </div>
            <div className='icon-container' style={{ top: '22%', left: '35%' }}>
              <FontAwesomeIcon
                icon={faHouseUser}
                className='map-icon'
                style={{ fontSize: '2rem' }}
                onClick={(e) => handleIconClick('cameron', e)}
              />
            </div>
            {popup.visible && popup.content && (
              <div
                className='absolute z-50'
                style={{
                  top: `${popup.top}px`,
                  left: `${popup.left}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <PopupCard {...popup.content} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CathcartMap;
