'use client';
import { useState, useEffect } from 'react';

interface EventItem {
  title: string;
  date: string;
  location: string;
  address: string;
  description?: string;
}

const events: EventItem[] = [
  {
    title: 'Author Talk: Palo Alto Mitchell Park Public Library',
    date: 'May 18, 2025',
    location: 'Mitchell Park Public Library',
    address: '700 Middlefield Rd, Palo Alto, CA 94301',
    description:
      'Ron Lee will be discussing his book, “Sojournors to Joke Sings: Tales of Chinatown and Beyond” at the Mitchell Park Public Library in Palo Alto as part of Asian American History Month',
  },
];

export default function Events() {
  return (
    <div id='events' className='scroll-mt-24'>
      <div className='w-full min-h-screen bg-electricBlue map-dots text-black py-16'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold text-shadow-lg text-center mb-10 tracking-wide'>
            Upcoming Author Events
          </h1>
          <div className='w-full flex justify-center px-4 tracking-wide'>
            <div className='grid gap-6' style={{ maxWidth: '20rem' }}>
              {events.map((event, index) => (
                <div
                  key={index}
                  className='w-full bg-white text-black border-4 border-black shadow-comic p-6 rounded-xl flex flex-col justify-between h-full'
                >
                  <h2 className='text-xl md:text-2xl font-bold mb-2 font-comic'>
                    {event.title}
                  </h2>
                  {''}
                  <p className='text-md font-semibold mb-1'>{event.date}</p>
                  <p className='text-md italic mb-3'>{event.location}</p>
                  <p className='text-md italic mb-3'>{event.address}</p>
                  {event.description && (
                    <p className='text-sm leading-relaxed'>
                      {event.description}
                    </p>
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
