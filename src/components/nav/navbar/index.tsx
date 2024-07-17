import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className='w-full h-20 bg-peach fixed top-0 shadow-lg border-b-4 border-border  z-50'>
        <div className='container mx-auto px-4 h-full'>
          <div className='flex justify-between items-center h-full'>
            <Logo />
            <button
              type='button'
              className='inline-flex items-center md:hidden'
              onClick={toggle}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                stroke='yellow'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M3 12h18M3 6h18M3 18h18' />
              </svg>
            </button>
            <ul className='hidden md:flex gap-x-6 text-white font-comic text-lg'>
              <li>
                <Link href='/About'>
                  <p className='hover:text-yellow-300 cursor-pointer'>
                    About the Author
                  </p>
                </Link>
              </li>
              <li>
                <Link href='/map'>
                  <p className='hover:text-yellow-300 cursor-pointer'>
                    Cathcart Map
                  </p>
                </Link>
              </li>
              <li>
                <Link href='/contacts'>
                  <p className='hover:text-yellow-300 cursor-pointer'>
                    Contact Us
                  </p>
                </Link>
              </li>
            </ul>
            <div className='hidden md:block'>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
