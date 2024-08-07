'use client';
import Image from 'next/image';
import { useEffect, useState, lazy, Suspense } from 'react';
import { IconProp, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import PopupCard from '../popup';
import { PopupData } from '../popup/data';
import { PopupState } from '@/types/index.d';
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

// Lazy load the FontAwesomeIcon component
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
      // Adjust position for mobile screens
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
      <div className='w-full h-full flex justify-center items-center bg-sky'>
        <div className='flex flex-col justify-center items-center text-center w-full'>
          <h1 className='text-4xl lg:text-6xl font-bold text-shadow-lg p-6'>
            Cathcart Map <br /> of San Francisco’s Chinatown
          </h1>
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
