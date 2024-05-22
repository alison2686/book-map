import Hero from '@/components/hero';
import Map from '@/components/map';
import ComicPanel from '@/components/panel';
import ComicPage from '@/components/strip';
export default function Home() {
  return (
    <>
      <Hero />
      <Map />
      <ComicPage />
      <ComicPanel />
    </>
  );
}
