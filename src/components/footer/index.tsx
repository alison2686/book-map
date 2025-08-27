// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='font-bangers bg-[#996515] text-black text-center p-4 border-t-2 border-black'>
      <div className='container mx-auto px-6'>
        <div className='flex justify-between items-center flex-col md:flex-row'>
          <p>
            Copyright &copy; {new Date().getFullYear()} Ronald D Lee. All rights
            reserved.
          </p>

          <div className='flex space-x-4 mt-2 md:mt-0 text-black'>
            <Link href='https://amazon.com' passHref>
              <FontAwesomeIcon icon={faBookOpen} className='w-6 h-6' />
            </Link>
            <Link href='mailto:someone@example.com' passHref>
              <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
