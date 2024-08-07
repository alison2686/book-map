import Image from 'next/image';
import { FC } from 'react';
import BackButton from '../buttons/BackButton';

interface ComicPanelProps {
  title: string;
  subtitle: string;
  img1: string;
  alt1: string;
  img2: string;
  alt2: string;
  img3: string;
  alt3: string;
  img4: string;
  alt4: string;
  img5: string;
  alt5: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  overlay1: string;
  overlay2: string;
  overlay3: string;
  overlay4: string;
  overlay5: string;
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
  img4,
  alt4,
  img5,
  alt5,
  text1,
  text2,
  text3,
  text4,
  text5,
  overlay1,
  overlay2,
  overlay3,
  overlay4,
  overlay5,
}) => {
  return (
    <div className='comic-panel container mx-auto p-4'>
      <BackButton />
      <div className='flex flex-col items-center justify-center md:h-screen'>
        <div className='comic-bg border-4 border-black w-full md:h-full flex flex-col items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-6 md:grid-rows-10 gap-4 w-full h-full p-2 md:p-6'>
            <h1 className='text-4xl md:text-8xl col-span-full row-span-2 flex items-center justify-center [text-shadow:_6px_3px_0_rgb(255_255_255_/_90%)]'>
              {title}
            </h1>
            <div className='col-span-full flex items-center justify-center mb-4 md:mb-0'>
              {subtitle}
            </div>
            {/* Top row: 3 square panels */}
            <div className='col-span-1 md:col-span-2 row-span-4 comic-panel relative'>
              <Image
                src={img1}
                alt={alt1}
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className={overlay1}>{text1}</div>
              </div>
            </div>
            <div className='col-span-1 md:col-span-2 row-span-4 comic-panel relative'>
              <Image
                src={img2}
                alt={alt2}
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
              <div className='absolute w-full h-full flex items-center justify-center'>
                <div className={overlay2}>{text2}</div>
              </div>
            </div>
            <div className='col-span-1 md:col-span-2 row-span-4 comic-panel relative'>
              <Image
                src={img3}
                alt={alt3}
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
              <div className='absolute w-full h-full flex items-center justify-center'>
                <div className={overlay3}>{text3}</div>
              </div>
            </div>
            {/* Bottom row: 2 rectangular panels */}
            <div className='col-span-1 md:col-span-3 row-span-4 comic-panel relative'>
              <Image
                src={img4}
                alt={alt4}
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className={overlay4}>{text4}</div>
              </div>
            </div>
            <div className='col-span-1 md:col-span-3 row-span-4 comic-panel relative'>
              <Image
                src={img5}
                alt={alt5}
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className={overlay5}>{text5}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicPanel;
