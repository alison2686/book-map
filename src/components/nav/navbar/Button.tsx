'use client';
import Link from 'next/link';

const Button = () => {
  return (
    <div className='relative'>
      <Link
        href='https://shop.ingramspark.com/b/084?params=IfEF6JbbUnmtZyoTfDpbXWXVMePOCczXPGojYhjKiX5'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center justify-center font-bangers h-12 rounded-lg tracking-wide bg-white font-bold px-5 hover:underline
                   shadow-[3px_3px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-transform
                   hover:translate-x-[1px] hover:translate-y-[1px]'
      >
        Purchase the Book
      </Link>
    </div>
  );
};

export default Button;
