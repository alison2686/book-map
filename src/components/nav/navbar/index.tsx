import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className='font-bangers w-full h-24 bg-[#a32b2b] sticky top-0 shadow-xl border-b-4 border-navBorder z-50'>
        <div className='container mx-auto px-4 h-full'>
          <div className='flex justify-between items-center h-full'>
            <Link href='/'>
              <div className='transition duration-300 ease-in-out transform hover:scale-105'>
                <p className='text-3xl'>Sojourners To Joke Sings</p>
                <p className='text-xl flex justify-center'>
                  Tales of Chinatown and Beyond
                </p>
              </div>
            </Link>

            {/* Navbar links - only visible on medium screens and larger */}
            <ul className='hidden md:flex gap-x-6 text-amber-50 font-comic text-lg tracking-wide'>
              <li>
                <Link href='/#about'>
                  <p className='hover:text-yellow-300 cursor-pointer'>
                    About the Authors
                  </p>
                </Link>
              </li>
              <li>
                <Link href='/#map'>
                  <p className='hover:text-yellow-300 cursor-pointer'>
                    Cathcart Map
                  </p>
                </Link>
              </li>
              {/* <li>
                <ScrollLink
                  to='events'
                  smooth={true}
                  duration={500}
                  offset={-96} // adjust to match your navbar height
                >
                  <p className='hover:text-yellow-300 cursor-pointer'>Events</p>
                </ScrollLink>
              </li> */}
              <li>
                <Link href='/Map'>
                  <p className='hover:text-yellow-300 cursor-pointer'>
                    Interactive Map
                  </p>
                </Link>
              </li>
              <li>
                <Link href='/WebComic'>
                  <p className='hover:text-yellow-300 cursor-pointer'>
                    Web Comic
                  </p>
                </Link>
              </li>
              <li>
                <Link href='/Contact'>
                  <p className='hover:text-yellow-300 cursor-pointer'>
                    Contact
                  </p>
                </Link>
              </li>
            </ul>

            {/* Button (visible on larger screens) */}
            <div className='hidden md:block'>
              <Button />
            </div>

            {/* Hamburger menu icon for mobile view */}
            {/* Hamburger menu icon for mobile view */}
            <div className='md:hidden pr-2'>
              <button
                onClick={toggle}
                className='p-2 rounded-md text-black hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
