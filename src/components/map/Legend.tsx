import React, { Suspense, lazy } from 'react';
import { IconProp, IconDefinition } from '@fortawesome/fontawesome-svg-core';

const FontAwesomeIcon = lazy(() =>
  import('@fortawesome/react-fontawesome').then((module) => ({
    default: module.FontAwesomeIcon,
  }))
);

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

interface LegendProps {
  icons: Record<IconKey, IconDefinition>;
}

const legendData = [
  { key: 'littlePete', label: 'Chapter 11 - Little Pete Must Die' },
  {
    key: 'sailboat',
    label: 'Chapter 9 - Robert Louis StevenSon v. Denis the Menace',
  },
  { key: 'phone', label: 'Chapter 29 - Chinese Telephone Exchange' },
  { key: 'beach', label: 'Chapter 7 - The Mystery of China Beach' },
  { key: 'shingchong', label: 'Chapter 25 - Merchants' },
  { key: 'cigar', label: 'Chapter 23 - The Cigar Makers' },
  { key: 'laundry', label: 'Chapter 24 - Laundries' },
  { key: 'tong', label: 'Chapter 14 - Suey Ying Tong Memories' },
  { key: 'cameron', label: 'Chapter 14 - The Dondaldina Cameron House' },
];

const Legend: React.FC<LegendProps> = ({ icons }) => {
  return (
    <div className='mt-10'>
      <h2 className='text-2xl lg:text-4xl font-bold mb-4'>Map Legend</h2>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {legendData.map(({ key, label }) => (
          <li key={key} className='flex items-center'>
            <Suspense fallback={<div>Loading...</div>}>
              <FontAwesomeIcon
                icon={icons[key as IconKey] as IconProp}
                className='text-2xl mr-2'
              />
            </Suspense>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legend;
