// import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';

// Define an interface for the props expected by Navbar
interface NavbarProps {
  toggle: () => void; // Adding toggle as a function prop
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  return (
    <>
      <div className='w-full h-20 bg-emerald-800 sticky top-0'>
        <div className='container mx-auto px-4 h-full'>
          <div className='flex justify-between items-center h-full'>
            <Logo />
            <ul className='hidden md:flex gap-x-6 text-white'>
              <li>
                <Link href='/about'>
                  <p>About the Book</p>
                </Link>
              </li>
              <li>
                <Link href='/map'>
                  <p>Cathcart Map of SF Chinatown</p>
                </Link>
              </li>
              <li>
                <Link href='/contacts'>
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
