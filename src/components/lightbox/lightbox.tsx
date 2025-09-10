'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export type LightboxImage = { src: string; alt: string };

export default function Lightbox({
  open,
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC / ← / →
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label={images[index]?.alt ?? 'Image preview'}
      className='fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-3 sm:p-6'
      onClick={onClose}
    >
      <div
        className='relative w-full max-w-5xl h-[70vh] sm:h-[80vh] rounded-2xl bg-black/20'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='absolute inset-0'>
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            priority
            className='object-contain select-none'
          />
        </div>

        <button
          onClick={onClose}
          aria-label='Close'
          autoFocus
          className='absolute top-3 right-3 rounded-xl bg-white/90 hover:bg-white px-3 py-1 text-black shadow'
        >
          ✕
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              aria-label='Previous image'
              className='absolute left-2 top-1/2 -translate-y-1/2 rounded-xl bg-white/80 hover:bg-white px-3 py-2 text-black shadow'
            >
              ←
            </button>
            <button
              onClick={onNext}
              aria-label='Next image'
              className='absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-white/80 hover:bg-white px-3 py-2 text-black shadow'
            >
              →
            </button>
          </>
        )}
      </div>
    </div>
  );
}
