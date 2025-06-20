'use client';
import { useRouter } from 'next/navigation';

const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/Contact');
  };

  return (
    <div className='relative'>
      <button
        onClick={handleClick}
        className='h-12 rounded-lg tracking-wide bg-white font-bold px-5 hover:bg-yellow-200 transition-colors'
      >
        Get Updates
      </button>
    </div>
  );
};

export default Button;
