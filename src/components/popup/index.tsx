import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PopupCardProps } from '@/types/index.d';
import { PanelData } from '../panel/data';

const PopupCard: FC<PopupCardProps> = ({
  id,
  title,
  subtitle,
  subtitle2,
  onClose,
  chapter,
  page,
}) => {
  const isComicAvailable = PanelData.some((comic) => comic.id === id);

  return (
    <div className='fixed inset-0 flex items-center justify-center p-4'>
      <div className='card bg-white text-black border border-black p-4 rounded shadow-lg min-w-96 sm:max-w-lg md:max-w-xl lg:max-w-2xl relative'>
        <button
          className='absolute top-2 right-2 text-black'
          onClick={onClose}
          aria-label='Close'
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <p className='font-bangers text-xl sm:text-2xl font-bold'>{title}</p>
        {/* <p className='font-bangers text-md sm:text-lg'>{chapter}</p>
        <p className='font-bangers text-sm'>{page}</p> */}
        <p className='text-sm sm:text-base py-2'>{subtitle}</p>
        <p className='text-sm sm:text-base py-2'>{subtitle2}</p>

        {isComicAvailable ? (
          <Link
            href={`/Comics/${id}`}
            // href={`/WebComic`}
            className='text-blue-700 underline hover:text-electricBlue transition-colors 
            '
          >
            View Web Comic
          </Link>
        ) : (
          <p className='italic text-blue-700'>Web comic coming soon!</p>
        )}
      </div>
    </div>
  );
};

export default PopupCard;
