// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className=' bg-[#996515] text-black text-center p-4 border-t-2 border-black'>
      <div className='container mx-auto px-6'>
        <div className='flex justify-between items-center flex-col md:flex-row'>
          {/* Left side: copyright + ISBN stacked */}
          <div className='flex flex-col items-center md:items-start'>
            <p className='font-bangers'>
              Copyright &copy; {new Date().getFullYear()} Ronald D Lee. All
              rights reserved.
            </p>
            <div className='mt-1 text-xs text-black'>
              ISBN: 978-1-961794-06-1 | Published by{' '}
              <Link
                href='https://www.conocimientospressllc.com/'
                className='underline'
              >
                Conocimientos Press
              </Link>
              , 2025
            </div>
          </div>

          {/* Contact info */}
          <div className='mt-3 md:mt-0 text-center md:text-left'>
            <h2 className='text-sm font-semibold'>Contact Us</h2>
            <p>Email: info@sojournerstojokesings.com </p>
          </div>

          {/* Icons */}
          <div className='flex space-x-4 mt-2 md:mt-0 text-black'>
            <Link
              href='https://shop.ingramspark.com/b/084?params=IfEF6JbbUnmtZyoTfDpbXWXVMePOCczXPGojYhjKiX5'
              passHref
            >
              <FontAwesomeIcon icon={faBookOpen} className='w-6 h-6' />
            </Link>
            <Link href='mailto:info@sojournerstojokesings.com' passHref>
              <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
