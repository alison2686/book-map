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
  img6?: string; // Optional 6th image
  alt6?: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6?: string; // Optional text for 6th panel
  overlay1: string;
  overlay2: string;
  overlay3: string;
  overlay4: string;
  overlay5: string;
  overlay6?: string; // Optional overlay for 6th panel
  img1ClassName?: string;
  img2ClassName?: string;
  img3ClassName?: string;
  img4ClassName?: string;
  img5ClassName?: string;
  img6ClassName?: string;
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
  img6, // Optional
  alt6, // Optional
  text1,
  text2,
  text3,
  text4,
  text5,
  text6, // Optional
  overlay1,
  overlay2,
  overlay3,
  overlay4,
  overlay5,
  overlay6, // Optional
  img1ClassName,
  img2ClassName,
  img3ClassName,
  img4ClassName,
  img5ClassName,
  img6ClassName,
}) => {
  // Determine the column span for the bottom row based on img6 presence
  const bottomRowColSpan = img6 ? 'md:col-span-2' : 'md:col-span-3';

  return (
    <div className='container mx-auto p-4'>
      <div className='hidden md:block'>
        <BackButton />
      </div>

      <div className='flex flex-col items-center justify-center lg:h-screen'>
        <div className='comic-bg border-4 border-black lg:max-w-screen-lg h-full flex flex-col items-center justify-center overflow-y-auto scrollbar-hide cursor-pointer'>
          <div className='grid grid-cols-1 md:grid-cols-6 auto-rows-auto gap-4 w-full h-full p-2 md:p-6'>
            <h1 className='text-4xl md:text-8xl col-span-full row-span-2 flex items-center justify-center [text-shadow:_6px_3px_0_rgb(255_255_255_/_90%)]'>
              {title}
            </h1>
            <div className='col-span-full flex flex-col items-center text-center mb-4 md:mb-0'>
              {subtitle.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            {/* Top row: 3 square panels */}
            <div className='col-span-1 md:col-span-2 row-span-4 flex flex-col items-center comic-panel'>
              <Image
                src={img1}
                alt={alt1}
                width={550}
                height={550}
                className={img1ClassName}
              />
              <div className='text-center'>
                <div className={overlay1}>{text1}</div>
              </div>
            </div>

            <div className='col-span-1 md:col-span-2 row-span-4 flex flex-col items-center comic-panel'>
              <Image
                src={img2}
                alt={alt2}
                width={500}
                height={500}
                className={img2ClassName}
              />
              <div className='text-center'>
                <div className={overlay2}>{text2}</div>
              </div>
            </div>
            <div className='col-span-1 md:col-span-2 row-span-4 flex flex-col items-center comic-panel'>
              <Image
                src={img3}
                alt={alt3}
                width={500}
                height={500}
                className={img3ClassName}
              />
              <div className='text-center'>
                <div className={overlay3}>{text3}</div>
              </div>
            </div>
            {/* Bottom row: 2 or 3 rectangular panels */}
            <div
              className={`col-span-1 ${bottomRowColSpan} md:col-span-2 row-span-4 flex flex-col items-center comic-panel`}
            >
              <Image
                src={img4}
                alt={alt4}
                width={500}
                height={500}
                className={img4ClassName}
              />
              <div className='text-center'>
                <div className={overlay4}>{text4}</div>
              </div>
            </div>
            <div
              className={`col-span-1 ${bottomRowColSpan} md:col-span-2 row-span-4 flex flex-col items-center comic-panel `}
            >
              <Image
                src={img5}
                alt={alt5}
                width={500}
                height={500}
                className={img5ClassName}
              />
              <div className='text-center'>
                <div className={overlay5}>{text5}</div>
              </div>
            </div>
            {/* Conditionally Rendered 6th Panel */}
            {img6 && (
              <div className='col-span-1 md:col-span-2 row-span-4 flex flex-col items-center comic-panel'>
                <Image
                  src={img6}
                  alt={alt6 || 'Additional panel'}
                  width={500}
                  height={500}
                  className={img6ClassName}
                />
                <div className='text-center'>
                  <div className={overlay6}>{text6 || 'New panel'}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicPanel;
