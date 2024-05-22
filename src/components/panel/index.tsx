// components/ComicPanel.js
import Image from 'next/image';

function ComicPanel() {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center min-h-screen p-4'>
        <div className='border-8 border-black max-w-6xl bg-comic-background bg-cover w-full h-screen flex items-center justify-center'>
          <div className='grid grid-cols-3 grid-rows-2 gap-4 w-3/4 h-3/4 mt-auto mb-10'>
            {/* Top row: 3 square panels */}
            <div className='bg-gray-200 border-2 border-black flex items-center justify-center'>
              Panel 1
            </div>
            <div className='bg-gray-200 border-2 border-black flex items-center justify-center'>
              Panel 2
            </div>
            <div className='bg-gray-200 border-2 border-black flex items-center justify-center'>
              Panel 3
            </div>

            {/* Bottom row: 2 rectangular panels */}
            <div className='col-span-2 bg-gray-200 border-2 border-black flex items-center justify-center'>
              Panel 4
            </div>
            <div className='bg-gray-200 border-2 border-black flex items-center justify-center'>
              Panel 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComicPanel;
