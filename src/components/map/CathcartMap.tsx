'use client';
import Image from 'next/image';
import { useEffect, useState, lazy, Suspense } from 'react';
import { IconProp, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import PopupCard from '../popup';
import { PopupData } from '../popup/data';
import { PopupState } from '@/types/index.d';
import HomeButton from '../buttons/HomeButton';
import Legend from './Legend';
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

type IconKey =
  | 'skull'
  | 'sailboat'
  | 'phone'
  | 'beach'
  | 'shingchong'
  | 'cigar'
  | 'laundry'
  | 'tong'
  | 'cameron';

const FontAwesomeIcon = lazy(() =>
  import('@fortawesome/react-fontawesome').then((module) => ({
    default: module.FontAwesomeIcon,
  }))
);

const CathcartMap = () => {
  const [width, setWidth] = useState(0);
  const [popup, setPopup] = useState<PopupState>({
    visible: false,
    content: null,
    top: 0,
    left: 0,
  });

  useEffect(() => {
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

  const handleIconClick = (
    id: string,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const dataItem = PopupData.find((item) => item.id === id);
    if (!dataItem) return;

    const iconRect = event.currentTarget.getBoundingClientRect();
    const containerRect = event.currentTarget
      .closest('.relative-container')!
      .getBoundingClientRect();

    const popupTop = iconRect.top - containerRect.top + iconRect.height / 2;
    let popupLeft = iconRect.left - containerRect.left + iconRect.width + 50;

    if (width < 768) {
      popupLeft = containerRect.width / 2;
    }

    setPopup({
      visible: true,
      content: {
        id: dataItem.id,
        title: dataItem.title,
        chapter: dataItem.chapter,
        page: dataItem.page,
        subtitle: dataItem.subtitle,
        onClose: handleClose,
      },
      top: popupTop,
      left: popupLeft,
    });
  };

  const handleClose = () => {
    setPopup({
      ...popup,
      visible: false,
    });
  };

  const icons: Record<IconKey, IconDefinition> = {
    skull: faSkull,
    sailboat: faSailboat,
    phone: faSquarePhone,
    beach: faShrimp,
    shingchong: faVihara,
    cigar: faJoint,
    laundry: faShirt,
    tong: faHotel,
    cameron: faHouseUser,
  };

  return (
    <div className='container mx-auto px-4 overflow-visible'>
      <div className='w-full h-full flex flex-col items-center bg-sky'>
        <HomeButton />
        <div className='flex flex-col justify-center items-center text-center w-full'>
          <h1 className='text-4xl lg:text-6xl font-bold text-shadow-lg pt-20 mt-10'>
            Cathcart Map <br /> of San Francisco’s Chinatown
          </h1>
          <h3 className='text-lg lg:text-xl font-medium leading-relaxed max-w-3xl p-4 mt-4'>
            You are invited to take a virtual tour of San Francisco Chinatown.
            Click on any icon on the map and a dialogue box will appear giving a
            little information about the place selected.
          </h3>

          {/* First row with map.jpeg */}
          <div className='flex justify-center items-center'>
            <div className='border-4 border-black relative-container overflow-visible m-8'>
              {width > 0 && (
                <Image
                  src='/images/map.jpeg'
                  alt='Cathcart Map'
                  width={width < 1024 ? 300 : 800}
                  height={width < 1024 ? 400 : 800}
                />
              )}
              {Object.keys(icons).map((key) => (
                <div
                  className='icon-container'
                  style={getIconPositionStyle(key as IconKey)}
                  key={key}
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <div
                      onClick={(e) => handleIconClick(key, e)}
                      className='map-icon'
                    >
                      <FontAwesomeIcon
                        icon={icons[key as IconKey] as IconProp}
                      />
                    </div>
                  </Suspense>
                </div>
              ))}
              {popup.visible && popup.content && (
                <div
                  className={`absolute z-50 ${
                    width < 768
                      ? 'fixed inset-0 flex items-center justify-center'
                      : ''
                  }`}
                  style={{
                    top: `${popup.top}px`,
                    left: `${popup.left}px`,
                    transform: width < 768 ? 'none' : 'translate(-50%, -50%)',
                  }}
                >
                  <PopupCard
                    id={popup.content.id}
                    title={popup.content.title}
                    chapter={popup.content.chapter}
                    page={popup.content.page}
                    subtitle={popup.content.subtitle}
                    onClose={handleClose}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Second row with map2.png and map3.png */}
          <div className='flex justify-center items-center'>
            <div className='border-4 border-black relative-container overflow-visible m-8'>
              {width > 0 && (
                <Image
                  src='/images/map/map2.png'
                  alt='San Francisco Chinatown and Environs'
                  width={width < 1024 ? 300 : 410}
                  height={width < 1024 ? 400 : 600}
                />
              )}
            </div>
            <div className='border-4 border-black relative-container overflow-visible m-8'>
              {width > 0 && (
                <Image
                  src='/images/map/map3.png'
                  alt='Cathcart Map China Tower'
                  width={width < 1024 ? 300 : 250}
                  height={width < 1024 ? 400 : 400}
                />
              )}

              {/* Beach icon placed on this image */}
              <div
                className='icon-container'
                style={{ top: '15%', left: '15%' }} // Adjust these values as needed
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <div
                    onClick={(e) => handleIconClick('beach', e)}
                    className='map-icon'
                  >
                    <FontAwesomeIcon icon={icons.beach as IconProp} />
                  </div>
                </Suspense>
              </div>
            </div>
          </div>

          {/* Legend and Credits below the maps */}
          <div className='w-full flex flex-col items-center'>
            <div className='mt-8'>
              <Legend icons={icons} />
            </div>
            <p className='text-md text-gray-600 mt-4 p-4'>
              Images courtesy of Schein and Schein Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  function getIconPositionStyle(key: IconKey) {
    const positions = {
      skull: { top: '40%', left: '75%' },
      sailboat: { top: '85%', left: '71%' },
      phone: { top: '76%', left: '77%' },
      beach: { top: '20%', left: '1%' },
      shingchong: { top: '72%', left: '59%' },
      cigar: { top: '90%', left: '50%' },
      laundry: { top: '62%', left: '75%' },
      tong: { top: '72%', left: '65%' },
      cameron: { top: '22%', left: '35%' },
    };
    return positions[key] || {};
  }
};

export default CathcartMap;
