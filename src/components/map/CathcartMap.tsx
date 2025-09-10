'use client';
import Image from 'next/image';
import { useEffect, useRef, useState, lazy, Suspense } from 'react';
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
import { IconProp, IconDefinition } from '@fortawesome/fontawesome-svg-core';

type IconKey =
  | 'littlePete'
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

  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateWidth = () => setWidth(window.innerWidth);
      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (popup.visible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside); // for mobile
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [popup.visible]);

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
        subtitle2: dataItem.subtitle2,
        onClose: handleClose,
      },
      top: popupTop,
      left: popupLeft,
    });
  };

  const handleClose = () => {
    setPopup((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  const icons: Record<IconKey, IconDefinition> = {
    littlePete: faSkull,
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
    <div className='w-full comic-dots px-4 sm:px-6 lg:px-8 py-12'>
      <div className='max-w-6xl mx-auto flex flex-col items-center text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold text-shadow-lg text-[#996515]  pt-16'>
          Welcome to the Interactive Map <br /> of San Francisco’s Chinatown
        </h1>
        <p className='text-base text-[#996515] sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl px-4 mt-4 '>
          You are invited to take a virtual tour of San Francisco Chinatown.
          Click on any icon on the map and a dialogue box will appear giving a
          little information about the place selected with a link to the web
          comic for this chapter.
        </p>

        {/* Map 1 */}
        <div className='relative-container border-4 border-black bg-white shadow-comic my-10'>
          {width > 0 && (
            <Image
              src='/images/map/map.jpeg'
              alt='Cathcart Map'
              width={width < 1024 ? 320 : 800}
              height={width < 1024 ? 400 : 800}
              className='rounded'
            />
          )}

          {Object.keys(icons)
            .filter((key) => key !== 'beach')
            .map((key) => (
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
                    <FontAwesomeIcon icon={icons[key as IconKey] as IconProp} />
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
                top: popup.content.id === 'beach' ? '135%' : `${popup.top}px`,
                left: popup.content.id === 'beach' ? '80%' : `${popup.left}px`,
                transform:
                  popup.content.id === 'beach'
                    ? 'translateX(-50%)'
                    : width < 768
                      ? 'none'
                      : 'translate(-50%, -50%)',
              }}
            >
              <div ref={popupRef}>
                <PopupCard {...popup.content} />
              </div>
            </div>
          )}
        </div>

        {/* Map 2 + 3 */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-8 my-10'>
          <div className='border-4 border-black bg-white shadow-comic p-2'>
            {width > 0 && (
              <Image
                src='/images/map/map2.png'
                alt='San Francisco Chinatown and Environs'
                width={width < 1024 ? 320 : 410}
                height={width < 1024 ? 400 : 600}
                className='rounded'
              />
            )}
          </div>
          <div className='border-4 border-black bg-white shadow-comic p-2 relative-container'>
            {width > 0 && (
              <Image
                src='/images/map/map3.png'
                alt='Cathcart Map China Tower'
                width={width < 1024 ? 300 : 250}
                height={width < 1024 ? 400 : 400}
                className='rounded'
              />
            )}
            <div className='icon-container' style={{ top: '15%', left: '15%' }}>
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

        {/* Legend & Credits */}
        <div className='w-full flex flex-col items-center space-y-4'>
          <Legend icons={icons} />
          <p className='text-sm text-gray-600 p-4'>
            Images courtesy of Schein and Schein Inc.
          </p>
        </div>
      </div>
    </div>
  );

  function getIconPositionStyle(key: IconKey) {
    const positions = {
      littlePete: { top: '40%', left: '75%' },
      sailboat: { top: '85%', left: '71%' },
      phone: { top: '76%', left: '77%' },
      beach: { top: '90%', left: '90%' },
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
