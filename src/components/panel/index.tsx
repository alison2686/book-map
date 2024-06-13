// components/ComicPanel.js

import Image from 'next/image';
import { FC } from 'react';

interface ComicPanelProps {
  title: string;
  subtitle: string;
  img1: string;
  alt1: string;
  img2: string;
  alt2: string;
  img3: string;
  alt3: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

const ComicPanel: FC<ComicPanelProps> = ({
  title,
  subtitle,
  img1,
  alt1,
  img2,
  alt2,
  img3,
  alt3,
  text1,
  text2,
  text3,
  text4,
}) => {
  return (
    <div className='container mx-auto p-4 '>
      <div className='flex items-center justify-center'>
        <div className='border-4 border-black bg-comic-background bg-cover w-full h-screen flex items-center justify-center'>
          <div className='grid grid-cols-6 grid-rows-10 gap-4 w-full h-full p-6'>
            <h1 className='text-8xl col-span-full row-span-2 flex items-center justify-center [text-shadow:_6px_3px_0_rgb(255_255_255_/_90%)]'>
              {title}
            </h1>
            <div className='col-span-full flex items-center justify-center'>
              {subtitle}
            </div>
            {/* Top row: 3 square panels */}
            <div className='col-span-2 row-span-4 comic-panel'>
              <Image
                src={img1}
                alt={alt1}
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='col-span-2 row-span-4 comic-panel relative'>
              <Image
                src={img2}
                alt={alt2}
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className='absolute bottom-0 left-0 text-white text-center p-4 bg-black bg-opacity-70'>
                  {text1}
                </div>
              </div>
            </div>
            <div className='col-span-2 row-span-4 comic-panel relative'>
              <Image
                src={img3}
                alt={alt3}
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />

              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className='absolute bottom-0 left-0 text-white text-center p-4 bg-black bg-opacity-70'>
                  {text2}
                </div>
              </div>
            </div>
            {/* Bottom row: 2 rectangular panels */}
            <div className='col-span-3 row-span-4 comic-panel transform translate-y-2 p-10'>
              {text3}
            </div>
            <div className='col-span-3 row-span-4 comic-panel p-10'>
              {text4}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicPanel;
