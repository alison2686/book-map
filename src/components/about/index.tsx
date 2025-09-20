// components/AboutCard.tsx
import Image from 'next/image';

export default function AboutCard() {
  return (
    <section
      id='about'
      className='section scroll-mt-24 md:scroll-mt-28 w-full map-dots text-white overflow-hidden'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Image column */}
          <div className='flex justify-center lg:justify-start'>
            <div className='rounded-2xl border-4 border-black shadow-comic bg-white overflow-hidden'>
              <Image
                src='/images/about/ron-lennie.jpeg'
                alt='Ron and Lennie Lee'
                width={900}
                height={1100}
                sizes='(min-width: 1024px) 450px, 250px'
                className='h-auto w-[250px] sm:w-[300px] md:w-[360px] lg:w-[450px]'
              />
            </div>
          </div>

          {/* Text column */}
          <div className='text-center lg:text-left space-y-6'>
            <h1 className='font-comic font-bold tracking-wider text-3xl sm:text-4xl lg:text-5xl'>
              About the Authors
            </h1>

            <p className='font-comic text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0'>
              Lennie Lee and son Ron Lee had similar careers as real estate
              investors and public school teachers. In her spare time, she wrote
              an extensive autobiography and memoir that included detailed
              observations of life in San Francisco’s Chinatown beyond the
              facade of tourism.
            </p>

            <p className='font-comic text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0'>
              Ron spent his free time advocating for a variety of issues
              involving Asian American Native Hawaiian Pacific Islanders. At
              Lennie’s request he was directed, along with his two daughters and
              nephews, to edit and add to her work. The result is an
              extraordinary adventure story and a description of the entire
              Chinese diaspora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
