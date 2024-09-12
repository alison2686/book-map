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
            <Link href='/'>
              <p className='text-4xl transition duration-300 ease-in-out transform hover:scale-105'>
                Becoming American
                <p className=' text-xl flex justify-center'>
                  A 600-Year Odyssey
                </p>
              </p>
            </Link>

            <ul className='hidden md:flex gap-x-6 text-white font-comic text-lg'>
              <li>
                <Link href='/About'>
                  <p className='hover:text-yellow-300 cursor-pointer'>
                    About the Authors
                  </p>
                </Link>
              </li>
              <li>
                <Link href='/Map'>
                  <p className='hover:text-yellow-300 cursor-pointer'>
                    Cathcart Map
                  </p>
                </Link>
              </li>
              <li>
                <Link href='/Contact'>
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
