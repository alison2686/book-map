import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PopupCardProps } from '@/types/index.d';

const PopupCard: FC<PopupCardProps> = ({
  id,
  title,
  subtitle,
  subtitle2,
  onClose,
  chapter,
  page,
}) => {
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
        <p className='text-xl sm:text-2xl font-bold'>{title}</p>
        <p className='text-md sm:text-lg'>{chapter}</p>
        <p className='text-sm'>{page}</p>
        <p className='text-sm sm:text-base'>{subtitle}</p>
        <p className='text-sm sm:text-base py-4'>{subtitle2}</p>
        <Link href={`/Comics/${id}`} className='text-blue-500 underline'>
          Learn More...
        </Link>
      </div>
    </div>
  );
};

export default PopupCard;
