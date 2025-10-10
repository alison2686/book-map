'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface EventItem {
  title: string;
  date: string;
  location: string;
  address: string;
  description?: string;
  link?: string;
}

const events: EventItem[] = [
  {
    title: 'Author Talk: Palo Alto Mitchell Park Public Library',
    date: 'May 18, 2025',
    location: 'Mitchell Park Public Library',
    address: '700 Middlefield Rd, Palo Alto, CA 94301',
    description:
      'Ron Lee will be discussing his book, “Sojournors to Joke Sings: Tales of Chinatown and Beyond” at the Mitchell Park Public Library in Palo Alto as part of Asian American History Month',
    link: 'https://www.youtube.com/watch?v=xzO7vd95imk',
  },
];

export default function Events() {
  return (
    <div id='events' className='scroll-mt-24'>
      <div className='w-full min-h-screen comic-dots text-amber-50 py-16'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold text-shadow-lg text-center mb-10 tracking-wider'>
            Upcoming Author Events
          </h1>
          <div className='w-full flex justify-center px-4 sm:px-6'>
            <div
              className='
      w-full max-w-2xl
      bg-[#996515]
      border-y-4 border-black
      text-black text-center
      font-bangers tracking-widest
      px-3 py-2 sm:py-3
      mb-6 sm:mb-8
      text-base sm:text-lg md:text-xl
      leading-snug
      rounded-lg
      shadow-[3px_3px_0_0_#000]
    '
            >
              📅 <strong>Check back soon for new author events!</strong>
            </div>
          </div>

          <div className='w-full flex justify-center px-4 tracking-wide'>
            <div className='grid gap-6' style={{ maxWidth: '20rem' }}>
              {events.map((event, index) => (
                <div
                  key={index}
                  className='w-full bg-white text-black border-4 border-black shadow-comic p-6 rounded-xl flex flex-col justify-between h-full'
                >
                  <div>
                    <h2 className='text-xl md:text-2xl font-bold mb-2 font-comic'>
                      {event.title}
                    </h2>
                    <p className='text-md font-semibold mb-1'>{event.date}</p>
                    <p className='text-md italic mb-1'>{event.location}</p>
                    <p className='text-md italic mb-3'>{event.address}</p>
                    {event.description && (
                      <p className='text-sm leading-relaxed mb-4'>
                        {event.description}
                      </p>
                    )}
                  </div>

                  {event.link && (
                    <Link
                      href={event.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-2 inline-block bg-black text-white text-center py-2 px-4 rounded-md font-bold hover:bg-gray-800 transition'
                    >
                      Watch the Recording
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
