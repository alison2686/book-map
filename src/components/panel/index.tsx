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
  img6?: string;
  alt6?: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6?: string;
  overlay1: string;
  overlay2: string;
  overlay3: string;
  overlay4: string;
  overlay5: string;
  overlay6?: string;
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
  img6,
  alt6,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  overlay1,
  overlay2,
  overlay3,
  overlay4,
  overlay5,
  overlay6,
  img1ClassName,
  img2ClassName,
  img3ClassName,
  img4ClassName,
  img5ClassName,
  img6ClassName,
}) => {
  return (
    <div className='container mx-auto px-4 py-6'>
      <div className='hidden md:block mb-4'>
        <BackButton />
      </div>

      <div className='flex flex-col items-center justify-center'>
        <div className='comic-bg border-4 border-black w-full lg:max-w-screen-lg h-full overflow-y-auto scrollbar-hide'>
          <div className='grid grid-cols-1 md:grid-cols-6 auto-rows-auto gap-4 p-4 md:p-6'>
            {/* Title */}
            <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold col-span-full text-center text-shadow-lg'>
              {title}
            </h1>

            {/* Subtitle */}
            <div className='col-span-full text-center text-base sm:text-lg lg:text-xl mt-2 mb-4 space-y-1'>
              {subtitle.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {/* Top row - first 3 panels */}
            {[
              {
                img: img1,
                alt: alt1,
                text: text1,
                overlay: overlay1,
                className: img1ClassName,
              },
              {
                img: img2,
                alt: alt2,
                text: text2,
                overlay: overlay2,
                className: img2ClassName,
              },
              {
                img: img3,
                alt: alt3,
                text: text3,
                overlay: overlay3,
                className: img3ClassName,
              },
            ].map((panel, i) => (
              <div
                key={i}
                className='md:col-span-2 flex flex-col items-center comic-panel'
              >
                <Image
                  src={panel.img}
                  alt={panel.alt}
                  width={500}
                  height={500}
                  className={`w-full h-auto border-4 border-black ${
                    panel.className || ''
                  }`}
                />
                <div className={`text-center ${panel.overlay}`}>
                  {panel.text}
                </div>
              </div>
            ))}

            {/* Bottom row - next 2 panels (adjust col-span based on img6 presence) */}
            {[
              {
                img: img4,
                alt: alt4,
                text: text4,
                overlay: overlay4,
                className: img4ClassName,
              },
              {
                img: img5,
                alt: alt5,
                text: text5,
                overlay: overlay5,
                className: img5ClassName,
              },
            ].map((panel, i) => (
              <div
                key={i + 3}
                className={`${
                  img6 ? 'md:col-span-2' : 'md:col-span-3'
                } flex flex-col items-center comic-panel`}
              >
                <Image
                  src={panel.img}
                  alt={panel.alt}
                  width={500}
                  height={500}
                  className={`w-full h-auto border-4 border-black ${
                    panel.className || ''
                  }`}
                />
                <div className={`text-center ${panel.overlay}`}>
                  {panel.text}
                </div>
              </div>
            ))}

            {/* Optional 6th panel */}
            {img6 && (
              <div className='md:col-span-2 flex flex-col items-center comic-panel'>
                <Image
                  src={img6}
                  alt={alt6 || 'Additional panel'}
                  width={500}
                  height={500}
                  className={`w-full h-auto border-4 border-black ${
                    img6ClassName || ''
                  }`}
                />
                <div className={`text-center ${overlay6}`}>
                  {text6 || 'New panel'}
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
