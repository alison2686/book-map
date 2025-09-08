'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const EMAIL = 'info@sojournerstojokesings.com';
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = EMAIL;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <section id='contact' className='scroll-mt-24 py-16 md:py-24 px-6'>
      <div className='absolute inset-0 -z-10 comic-dots'></div>

      <div className='mx-auto max-w-6xl'>
        <h2 className='font-bangers text-center tracking-widest text-4xl md:text-5xl text-white'>
          📬 Contact the Author
        </h2>

        <div className='mt-8 mx-auto w-full max-w-5xl bg-amber-100 border-8 border-black rounded-2xl p-6 md:p-10 shadow-[8px_8px_0_#000]'>
          <p className='text-lg md:text-xl text-black/90 leading-relaxed text-center'>
            Have questions, feedback, or just want to say hello?
            <span className='font-semibold'> Send an email!</span>
          </p>

          {/* Big comic button */}
          <div className='mt-8 flex justify-center'>
            <Link
              href='mailto:info@sojournerstojokesings.com?subject=Hello%20from%20the%20website&body=Hi%20there%2C'
              aria-label='Email the Author'
              className='font-bangers inline-flex items-center justify-center text-xl md:text-2xl
                         bg-[#996515] border-4 border-black rounded-xl px-6 py-3
                         shadow-[6px_6px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
                         hover:shadow-[4px_4px_0_#000] active:translate-x-[4px] active:translate-y-[4px]
                         active:shadow-[2px_2px_0_#000] transition-transform'
            >
              Email the Author
            </Link>
          </div>

          <div className='mt-6 flex items-center justify-center gap-3'>
            <code className='bg-white border-4 border-black rounded-lg px-3 py-2 text-sm md:text-base'>
              {EMAIL}
            </code>

            <button
              type='button'
              onClick={copyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              title={copied ? 'Copied!' : 'Copy email'}
              className='inline-flex items-center justify-center rounded-lg
               bg-[#996515] border-2 border-black 
               p-1.5 md:p-2    /* smaller on mobile, normal on desktop */
               shadow-[3px_3px_0_#000] md:shadow-[4px_4px_0_#000]
               hover:translate-x-[1px] hover:translate-y-[1px]
               hover:shadow-[2px_2px_0_#000] md:hover:shadow-[3px_3px_0_#000]
               active:translate-x-[2px] active:translate-y-[2px]
               active:shadow-[1px_1px_0_#000] md:active:shadow-[2px_2px_0_#000]
               transition-transform'
            >
              <FontAwesomeIcon
                icon={copied ? faCheck : faCopy}
                className='w-4 h-4 md:w-5 md:h-5 text-black' // smaller icon on mobile
              />
            </button>
          </div>

          {/* Copied toast */}
          <div
            className={`mt-3 text-center font-bangers tracking-wider text-sm transition-opacity duration-200
             ${copied ? 'opacity-100' : 'opacity-0'}`}
          >
            Copied to clipboard!
          </div>
        </div>
      </div>
    </section>
  );
}
