// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white text-center p-4'>
      <div className='container mx-auto px-6'>
        <div className='flex justify-between items-center flex-col md:flex-row'>
          <p>
            &copy; {new Date().getFullYear()} Becoming American: A 600 Year
            Odyssey. All rights reserved.
          </p>
          <div className='flex space-x-4 mt-2 md:mt-0'>
            <Link href='/privacy' className='hover:underline'>
              Privacy Policy
            </Link>
          </div>
          <div className='flex space-x-4 fill-current text-white'>
            <Link href='https://amazon.com' passHref>
              <Image
                src='/icons/book-open.svg'
                alt='Facebook'
                width={24}
                height={24}
              />
            </Link>
            <Link href='https://amazon.com' passHref>
              <Image
                src='/icons/mail.svg'
                alt='Facebook'
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
