// components/ComicPanel.js
import Image from 'next/image';

function ComicPanel() {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-2 bg-seafoam'>
      <Image
        src='/images/chinese-new-year.png'
        alt='Comic Panel'
        width={300}
        height={300}
        layout='responsive'
      />
      <div className='px-6 py-4'>
        <p className='text-base text-gray-700'>Hello</p>
      </div>
    </div>
  );
}

export default ComicPanel;
