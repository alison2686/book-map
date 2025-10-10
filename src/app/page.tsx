'use client';
import Hero from '@/components/hero';
// import MapImage from '@/components/map/PlainMap';
import Event from '@/components/events';
import About from '@/components/about';

export default function Home() {
  return (
    <>
      <Hero />

      {/* <MapImage /> */}
      <About />
      <Event />
    </>
  );
}
