import { FC } from 'react';

interface PopupCardProps {
  title: string | null;
  subtitle: string;
}

const PopupCard: FC<PopupCardProps> = ({ title, subtitle }) => {
  return (
    <div className='card bg-white text-black border border-black p-4 rounded shadow-lg'>
      <p className='text-xl font-bold'>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default PopupCard;
