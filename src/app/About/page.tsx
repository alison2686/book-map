'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Evolution from '@/components/evolution';
import AboutCard from '@/components/about';

export default function About() {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, []);

  return (
    <>
      <AboutCard />
      <Evolution />
    </>
  );
}
