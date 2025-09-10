'use client';
import Image from 'next/image';

export default function CoverCard({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='
        relative aspect-[3/4]
        w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96
        overflow-hidden rounded-xl
        transition-transform duration-300
        hover:scale-[1.02] hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-black/30
      '
      aria-label={`${alt} (open larger view)`}
    >
      <Image src={src} alt={alt} fill className='object-contain p-2' />
    </button>
  );
}
