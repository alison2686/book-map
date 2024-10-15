'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Evolution = () => {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className='container mx-auto px-4 '>
      <div className='map-dots w-full h-full flex flex-col justify-center items-center text-white bg-sky p-10'>
        <div className='flex justify-center items-center text-center w-full'>
          <div className='grid grid-cols-3 gap-2 w-full h-full'>
            {/* Title spanning both columns */}
            <div className='col-span-3'>
              <h1 className='text-6xl lg:text-6xl p-4'>
                Evolution of the Book
              </h1>
            </div>
            {/* Image column */}
            <div className='col-span-3 flex justify-center items-center p-4'>
              <Image
                src='/images/evolution/joke-sings.png'
                alt='Joke Sings book cover'
                width={width < 1024 ? 100 : 200}
                height={width < 1024 ? 100 : 300}
              />
            </div>

            {/* Text column */}
            <div className='col-span-3 flex flex-col justify-center items-center'>
              <h4 className=' max-w-3xl text-xl leading-relaxed text-left'>
                “Uncle Ron, look at what Grandma wrote, it reads like something
                out of “Warrior.’ He handed me a large green binder with the
                title Joke Sings. It turned out to be a book written by LK
                Lennie Lee (1923-2021) my mother, Erik’s grandmother.
              </h4>
              <h4 className='max-w-3xl text-xl leading-relaxed text-left pt-6'>
                “What’s Warrior?” I asked. He explained it was a television
                series about Chinatown in the 1880s and was based on an 8 page
                “treatment” written by Bruce Lee in the 1970s. Stories by Bruce
                Lee versus tales by an elderly grandmother seemed unlikely. It
                turned out Lennie’s stories were arguably more adventurous and
                exciting than Bruce’s or those written by Warrior producers.
              </h4>
              <h4 className='max-w-3xl text-xl leading-relaxed text-left pt-6'>
                For example, Lennie writes that her ancestors were the
                inspiration for one of the greatest adventure stories ever
                written, Robert Louis Stevenson’s Treasure Island.
              </h4>
              <h4 className='max-w-3xl text-xl leading-relaxed text-left pt-6'>
                Knowing there would be doubters, our family did research to
                confirm plausibility. Enough was collected that a book was
                produced. A bonus is that her incredible recall allowed for
                detailed descriptions of Chinatown life beyond the façade of
                tourism. Realizing this work would appeal to young people, it
                was decided to produce this version that has the look and feel
                of a graphic novel.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evolution;
