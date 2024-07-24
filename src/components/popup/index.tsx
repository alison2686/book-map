// components/popup/PopupCard.js
import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface PopupCardProps {
  id: string;
  title: string;
  chapter: string;
  page: string;
  subtitle: string;
  onClose: () => void; // Add an onClose prop
}

const PopupCard: FC<PopupCardProps> = ({
  id,
  title,
  subtitle,
  onClose,
  chapter,
  page,
}) => {
  return (
    <div className='card bg-white text-black border border-black p-4 rounded shadow-lg w-96 relative'>
      <button
        className='absolute top-2 right-2 text-black'
        onClick={onClose}
        aria-label='Close'
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <p className='text-2xl font-bold'>{title}</p>
      <p className='text-lg'>{chapter}</p>
      <p className='text-sm'>{page}</p>
      <p className=''>{subtitle}</p>
      <Link href={`/Comics/${id}`} className='text-blue-500 underline'>
        Learn More...
      </Link>
    </div>
  );
};

export default PopupCard;
