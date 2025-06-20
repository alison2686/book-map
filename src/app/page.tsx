'use client';
import Hero from '@/components/hero';
import MapImage from '@/components/map/PlainMap';
import Event from '@/components/events';
import About from './About/page';

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      {/* <Event /> */}
      <About />
      <MapImage />
    </>
  );
}
