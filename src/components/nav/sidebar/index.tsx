'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useCallback } from 'react';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export default function Sidebar({ isOpen, toggle }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  // Prevent body scroll while drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on ESC
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) toggle();
    },
    [isOpen, toggle]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  const handleAboutClick = () => {
    toggle();

    if (pathname === '/') {
      const el = document.getElementById('about');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push('/#about');
    }
  };

  const handleEventsClick = () => {
    toggle();

    if (pathname === '/') {
      const el = document.getElementById('events');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push('/#events');
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggle}
      />

      {/* Drawer */}
      <aside
        role='dialog'
        aria-modal='true'
        aria-label='Site navigation'
        className={`fixed right-0 top-0 z-[70] h-full w-[45%] max-w-sm bg-white shadow-2xl border-l-4 border-black
        transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header row with close button */}
        <div className='flex items-center justify-between px-5 pt-5 pb-4 border-b'>
          <span className='font-bangers text-2xl tracking-wide'>Menu</span>

          <button
            aria-label='Close menu'
            onClick={toggle}
            className='p-2 rounded-md hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z'
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className='px-6 py-6'>
          <ul className='space-y-4 text-center leading-relaxed text-xl'>
            <li>
              <button
                onClick={handleAboutClick}
                className='block w-full hover:underline font-bangers tracking-wide'
              >
                About the Authors
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  toggle();
                  router.push('/Map');
                }}
                className='block w-full hover:underline font-bangers tracking-wide'
              >
                Cathcart Map
              </button>
            </li>

            {/* Example: scroll to events */}
            <li>
              <button
                onClick={handleEventsClick}
                className='block w-full hover:underline font-bangers tracking-wide'
              >
                Events
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  toggle();
                  router.push('/Contact');
                }}
                className='block w-full hover:underline font-bangers tracking-wide'
              >
                Contact Us
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  toggle();
                  router.push(
                    'https://shop.ingramspark.com/b/084?params=IfEF6JbbUnmtZyoTfDpbXWXVMePOCczXPGojYhjKiX5'
                  );
                }}
                className='block w-full hover:underline font-bangers tracking-wide'
              >
                Purchase the Book
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
