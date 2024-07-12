import { PopupData } from '../popup/data';
import { FC } from 'react';

interface PopupCardProps {
  title: string;
  subtitle: string;
}

const PopupCard: FC<PopupCardProps> = ({ title, subtitle }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default PopupCard;
