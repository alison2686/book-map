'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <div className='absolute bottom-4 left-4 z-50 md:absolute md:bottom-0 md:left-0 p-4'>
      <button
        className='flex items-center space-x-2 font-bangers text-blue-500 hover:text-blue-700 border border-blue-500 rounded-full p-2 bg-white'
        onClick={() => router.push('/Map')}
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className='text-3xl' />
        <span>Back to Map</span>
      </button>
    </div>
  );
};

export default BackButton;
