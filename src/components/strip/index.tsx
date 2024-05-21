// components/ComicStrip.tsx
import Image from 'next/image';

interface Panel {
  image: string;
  text: string;
}

interface ComicStripProps {
  panels: Panel[];
}

const ComicStrip: React.FC<ComicStripProps> = ({ panels }) => {
  return (
    <div className='flex flex-wrap bg-comic-yellow p-8 gap-8 justify-center items-start'>
      {panels.map((panel, index) => (
        <div
          key={index}
          className='panel max-w-sm rounded-lg overflow-hidden shadow-outline-heavy m-2 bg-white relative border-6 border-comic-black jagged-border'
        >
          <Image
            src={panel.image}
            alt={`Comic Panel ${index + 1}`}
            width={300}
            height={300}
            layout='responsive'
          />
          <div className='p-4 bg-white'>
            <p className='font-comic text-lg text-gray-800'>{panel.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComicStrip;
