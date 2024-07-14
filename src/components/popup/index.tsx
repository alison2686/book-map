import { FC } from 'react';
import Link from 'next/link';

interface PopupCardProps {
  title: string | null;
  subtitle: string;
}

const PopupCard: FC<PopupCardProps> = ({ title, subtitle }) => {
  return (
    <div className='card bg-white text-black border border-black p-4 rounded shadow-lg'>
      <p className='text-xl font-bold'>{title}</p>
      <p>{subtitle}</p>
      <Link href='/Comics' className='text-blue-500 underline'>
        Learn More...
      </Link>
    </div>
  );
};

export default PopupCard;
