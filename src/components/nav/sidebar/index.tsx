'use client';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter, usePathname } from 'next/navigation';

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const handleEventsClick = () => {
    toggle(); // close the sidebar
    if (pathname === '/') {
      // already on home page – scroll
      const el = document.getElementById('events');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // navigate to homepage with hash
      router.push('/#events');
    }
  };

  return (
    <div
      className='sidebar-container font-bangers fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10'
      style={{
        opacity: `${isOpen ? '1' : '0'}`,
        top: ` ${isOpen ? '0' : '-100%'}`,
      }}
    >
      <button className='absolute right-0 p-5' onClick={toggle}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='48'
          height='48'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
          />
        </svg>
      </button>

      <ul className='sidebar-nav text-center leading-relaxed text-xl'>
        <li>
          <Link href='/About' onClick={toggle}>
            <p>About the Author</p>
          </Link>
        </li>
        {/* <li>
          <button onClick={handleEventsClick} className='hover:text-yellow-300'>
            Events
          </button>
        </li> */}
        <li>
          <Link href='/Map' onClick={toggle}>
            <p>Cathcart Map</p>
          </Link>
        </li>
        <li>
          <Link href='/Comics' onClick={toggle}>
            <p>Web Comic</p>
          </Link>
        </li>
        <li>
          <Link href='/Contact' onClick={toggle}>
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
