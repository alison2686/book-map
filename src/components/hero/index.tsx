'use client';

import Link from 'next/link';
import { useState, useCallback, useMemo } from 'react';
import CoverCard from '../coverCard/coverCard';
import Lightbox, { LightboxImage } from '../lightbox/lightbox';

export default function Hero() {
  // Keep images stable (avoids re-creating callbacks)
  const images = useMemo<LightboxImage[]>(
    () => [
      {
        src: '/images/hero/front-cover.png',
        alt: 'Sojourners to Joke Sings front book cover',
      },
      {
        src: '/images/hero/back-cover.png',
        alt: 'Sojourners to Joke Sings back book cover',
      },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const onPrev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const onNext = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  return (
    <section
      className='w-full comic-dots text-white'
      aria-labelledby='hero-title'
    >
      {/* Info Banner */}
      <div className='w-full border-b-8 border-black bg-[#996515] tracking-wide'>
        <div className='mx-auto max-w-6xl px-3 sm:px-4'>
          <div className='flex flex-wrap items-center justify-center gap-3 py-2 sm:py-3'>
            <h1 id='hero-title' className='sr-only'>
              Sojourners To Joke Sings
            </h1>
            <div className='flex items-center gap-2'>
              <span className='text-2xl sm:text-3xl md:text-4xl'>📖</span>
              <span className='text-black text-base sm:text-lg md:text-xl font-bold hover:underline '>
                <Link href='https://shop.ingramspark.com/b/084?params=IfEF6JbbUnmtZyoTfDpbXWXVMePOCczXPGojYhjKiX5'>
                  Available now on IngramSpark!
                </Link>
              </span>
            </div>
            <span className='hidden sm:inline text-black font-bangers'>•</span>
            <Link
              href='https://shop.ingramspark.com/b/084?params=IfEF6JbbUnmtZyoTfDpbXWXVMePOCczXPGojYhjKiX5'
              className='font-bangers inline-flex items-center rounded-lg bg-white text-black border-4 border-black px-2 py-1
                         text-xs sm:text-sm md:text-base tracking-widest hover:underline
                         shadow-[3px_3px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-transform
                         hover:translate-x-[1px] hover:translate-y-[1px]'
            >
              Order here
            </Link>
          </div>
        </div>
      </div>

      {/* Covers + Intro */}
      <div className='flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto'>
        {/* Book Covers */}
        <div className='flex flex-wrap justify-center gap-6 sm:gap-8 mb-10'>
          {images.map((img, i) => (
            <CoverCard
              key={img.src}
              src={img.src}
              alt={img.alt}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          ))}
        </div>

        {/* Intro Copy */}
        <div
          className='bg-white text-black p-6 md:p-8 rounded-2xl border border-black/10 shadow-lg 
                        leading-relaxed text-sm sm:text-base md:text-lg max-w-3xl'
        >
          <p>
            Family Matriarch LK Lennie Lee (1923–2021) lived a long and
            productive life. While sorting through her belongings, we discovered
            a book she had written about her life and times — plus those of our
            forebears. At the top of the first page, there was a handwritten
            note:
          </p>
          <p className='italic mt-3'>
            “Grandmother Lee’s Autobiography.
            <br /> Note: Needs corrections and upgrading”
          </p>
          <p className='mt-3'>
            Our family began reviewing her work expecting conventional tales —
            the Gold Rush, the railroads — but instead, we found astonishing
            stories.
          </p>
          <p className='mt-3'>
            From tales of coffin stowaways and shrimping villages to the 1939
            World’s Fair and years serving as a teacher and fiery counselor, the
            narrative threads together, personal, political, and cultural
            elements.
          </p>
          <p className='mt-3'>
            Rooted in the vivid recollections of L K Lennie Lee and expanded by
            her son, Ron Lee, and descendants,{' '}
            <em>Sojourners to Joke Sings: Tales of Chinatown & Beyond</em>{' '}
            blends oral history, myth, and archival research to reclaim erased
            narratives and honor the lives of “Joke Sings”—those who survived
            and forged belonging across oceans and generations.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        images={images}
        index={index}
        onClose={() => setOpen(false)}
        onPrev={onPrev}
        onNext={onNext}
      />
    </section>
  );
}
