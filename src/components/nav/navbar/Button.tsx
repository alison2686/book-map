'use client';
import { useRouter } from 'next/navigation';

const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('https://www.amazon.com/-/es/Ron-Lee/dp/1961794063');
  };

  return (
    <div className='relative'>
      <button
        onClick={handleClick}
        className='font-bangers h-12 rounded-lg tracking-wide bg-white font-bold px-5 hover:underline
                         shadow-[3px_3px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-transform
                         hover:translate-x-[1px] hover:translate-y-[1px]'
      >
        Purchase the Book
      </button>
    </div>
  );
};

export default Button;
