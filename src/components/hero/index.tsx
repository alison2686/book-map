'use client';
import Image from 'next/image';

function CoverCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className='
    relative aspect-[3/4]
    w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96
    overflow-hidden rounded-xl
    transition-transform duration-300
    hover:scale-[1.02] hover:shadow-xl
  '
    >
      <Image src={src} alt={alt} fill className='object-contain p-2' priority />
    </div>
  );
}

export default function Hero() {
  return (
    <div className='w-full comic-dots text-white'>
      {/* Info Banner */}
      <div className='w-full bg-[#806517] border-y-4 border-black py-4 px-6 text-center font-comic text-black text-base sm:text-lg md:text-xl tracking-wide'>
        📖 <strong>Book Coming August 25th!</strong>
        &nbsp; — &nbsp;
        <a
          href='/Contact'
          className='underline underline-offset-2 hover:text-electricBlue transition-colors'
        >
          Signup to receive updates here
        </a>
      </div>

      <div className='flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto'>
        {/* Sleek Covers */}
        <div className=' flex flex-wrap justify-center gap-6 sm:gap-8 mb-10'>
          <CoverCard
            src='/images/hero/front-cover.png'
            alt='Sojourners to Joke Sings front book cover'
          />
          <CoverCard
            src='/images/hero/back-cover.png'
            alt='Sojourners to Joke Sings back book cover'
          />
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
            <br /> Note: Needs Corrections and upgrading”
          </p>
          <p className='mt-3'>
            Our family began reviewing her work expecting conventional tales —
            the Gold Rush, the railroads — but instead, we found astonishing
            stories. Lennie claimed our ancestors inspired Robert Louis
            Stevenson’s <em>Treasure Island</em>.
          </p>
          <p className='mt-3 italic'>
            <em>Sojourners To Joke Sings: Tales of Chinatown and Beyond</em>{' '}
            reveals what we uncovered while exploring her claims.
          </p>
        </div>
      </div>
    </div>
  );
}
