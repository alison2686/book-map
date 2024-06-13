// components/ComicPanel.js

import Image from 'next/image';
import { FC } from 'react';

interface ComicPanelProps {
  title: string;
}

const ComicPanel: FC<ComicPanelProps> = ({ title }) => {
  return (
    <div className='container mx-auto p-4 '>
      <div className='flex items-center justify-center'>
        <div className='border-4 border-black bg-comic-background bg-cover w-full h-screen flex items-center justify-center'>
          <div className='grid grid-cols-6 grid-rows-10 gap-4 w-full h-full p-6'>
            <h1
              className='text-8xl col-span-full row-span-2 flex items-center justify-center [text-shadow:_6px_3px_0_rgb(255_255_255_/_90%)]'
              title={title}
            >
              {title}
            </h1>
            <div className='col-span-full flex items-center justify-center'>
              During the 1895 San Francisco Fair at Golden Gate Park, hooligan
              Fong Ching (Little Pete), a city-slicker, police dupe, and stool
              pigeon, became involved with international kidnapping of Chinese
              girls from Hong Kong and China to dance at the Parks events
            </div>
            {/* Top row: 3 square panels */}
            <div className='col-span-2 row-span-4 comic-panel'>
              <Image
                src='/images/little-pete1.png'
                alt='barber'
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='col-span-2 row-span-4 comic-panel relative'>
              <Image
                src='/images/ggp.png'
                alt='barber'
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className='absolute bottom-0 left-0 text-white text-center p-4 bg-black bg-opacity-70'>
                  The Arizona Suey Ying Tong men wanted to use the assassination
                  of Little Pete as an unspoken warning to San Francisco rogue
                  police.
                </div>
              </div>
            </div>
            <div className='col-span-2 row-span-4 comic-panel relative'>
              <Image
                src='/images/barber.png'
                alt='barber'
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />

              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className='absolute bottom-0 left-0 text-white text-center p-4 bg-black bg-opacity-70'>
                  Before the assassination, San Franciscos Yellow Journalism
                  news media were forwarned about the impending murder, thus the
                  newspaper reporters were at the mirder scene minutes after the
                  killing.
                </div>
              </div>
            </div>
            {/* Bottom row: 2 rectangular panels */}
            <div className='col-span-3 row-span-4 comic-panel transform translate-y-2 p-10'>
              Suey Ying Tong elders told the story that the Tombstone AZ killers
              chose January 23, 1897, during the Chinese New Year celebration,
              when there were a lot of out-of-towners and strangers in the City
              as the right time to assasinate Little Pete and leave town
              unnoticed.
            </div>
            <div className='col-span-3 row-span-4 comic-panel p-10'>
              Albert Bew Chan (Lucretias grandfather) said that he was the ten
              year old messanger boy who deliverd the killers message via their
              Chinatown telephone switchboard to Tombstone that Little Pete had
              been killed.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicPanel;
