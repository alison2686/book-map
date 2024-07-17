// components/HomeButton.js
'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const HomeButton = () => {
  const router = useRouter();
  return (
    <button
      className='flex items-center space-x-2 text-blue-500 hover:text-blue-700 border border-blue-500 rounded-full p-2 bg-white m-5'
      onClick={() => router.push('/')}
    >
      <FontAwesomeIcon icon={faArrowAltCircleLeft} className='text-3xl' />
      <span>Home</span>
    </button>
  );
};

export default HomeButton;
