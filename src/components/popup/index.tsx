// components/popup/PopupCard.js
import { FC } from 'react';
import Link from 'next/link';

interface PopupCardProps {
  id: string;
  title: string;
  subtitle: string;
}

const PopupCard: FC<PopupCardProps> = ({ id, title, subtitle }) => {
  return (
    <div className='card bg-white text-black border border-black p-4 rounded shadow-lg w-96'>
      <p className='text-xl font-bold'>{title}</p>
      <p className=''>{subtitle}</p>
      <Link href={`/Comics/${id}`} className='text-blue-500 underline'>
        Learn More...
      </Link>
    </div>
  );
};

export default PopupCard;
