// components/ComicPanel.js
import Image from 'next/image';

function ComicPanel() {
  return (
    <div className='container mx-auto p-4 '>
      <div className='flex items-center justify-center'>
        <div className='border-4 border-black bg-comic-background bg-cover w-2/3 h-screen flex items-center justify-center'>
          <div className='grid grid-cols-6 grid-rows-10 gap-4 w-full h-full p-6'>
            <h1 className='text-8xl col-span-full row-span-2 flex items-center justify-center [text-shadow:_6px_2px_0_rgb(255_255_255_/_90%)]'>
              Panel Title
            </h1>
            <div className='col-span-full flex items-center justify-center'>
              Panel Subtitle
            </div>
            {/* Top row: 3 square panels */}
            <div className='col-span-2 row-span-4 bg-slate-50 border-2 border-black shadow-2xl flex items-center justify-center rounded'>
              Panel 1
            </div>
            <div className='col-span-2 row-span-4 bg-slate-50 border-2 border-black shadow-2xl flex items-center justify-center rounded'>
              Panel 2
            </div>
            <div className='col-span-2 row-span-4 bg-slate-50 border-2 border-black shadow-2xl flex items-center justify-center rounded'>
              Panel 3
            </div>

            {/* Bottom row: 2 rectangular panels */}
            <div className='col-span-3 row-span-4 bg-slate-50 border-2 border-black shadow-2xl flex items-center justify-center rounded transform translate-y-2'>
              Panel 4
            </div>
            <div className='col-span-3 row-span-4 bg-slate-50 border-2 border-black shadow-2xl flex items-center justify-center rounded'>
              Panel 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComicPanel;
