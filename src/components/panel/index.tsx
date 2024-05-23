// components/ComicPanel.js
import Image from 'next/image';

function ComicPanel() {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center min-h-screen p-4'>
        <div className='border-8 border-black max-w-6xl bg-comic-background bg-cover w-full h-screen flex items-center justify-center'>
          <div className='grid grid-cols-6 grid-rows-10 gap-4 w-10/12 h-full mb-8'>
            <h1 className='text-6xl col-span-full row-span-2 flex items-center justify-center rounded'>
              Panel Title
            </h1>
            <div className='col-span-full border-4 border-black flex items-center justify-center rounded'>
              Panel Subtitle
            </div>
            {/* Top row: 3 square panels */}
            <div className='col-span-2 row-span-4 bg-slate-50 border-4 border-black flex items-center justify-center rounded'>
              Panel 1
            </div>
            <div className='col-span-2 row-span-4 bg-slate-50 border-4 border-black flex items-center justify-center rounded'>
              Panel 2
            </div>
            <div className='col-span-2 row-span-4 bg-slate-50 border-4 border-black flex items-center justify-center rounded'>
              Panel 3
            </div>

            {/* Bottom row: 2 rectangular panels */}
            <div className='col-span-3 row-span-4 bg-slate-50 border-4 border-black flex items-center justify-center rounded'>
              Panel 4
            </div>
            <div className='col-span-3 row-span-4 bg-slate-50 border-4 border-black flex items-center justify-center rounded'>
              Panel 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComicPanel;
