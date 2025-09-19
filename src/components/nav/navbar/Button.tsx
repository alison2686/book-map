'use client';
import { useRouter } from 'next/navigation';

const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(
      'https://shop.ingramspark.com/b/084?params=IfEF6JbbUnmtZyoTfDpbXWXVMePOCczXPGojYhjKiX5'
    );
  };

  return (
    <div className='relative'>
      <button
        onClick={handleClick}
        className='font-bangers h-12 rounded-lg tracking-wide bg-white font-bold px-5 hover:bg-yellow-200 transition-colors'
      >
        Purchase the Book
      </button>
    </div>
  );
};

export default Button;
