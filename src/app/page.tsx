import Hero from '@/components/hero';
import Map from '@/components/map';
import ComicPanel from '@/components/panel';
// import ComicPage from '@/components/strip';
import Comic from '@/components/comic';

export default function Home() {
  return (
    <>
      <Hero />
      <Map />
      {/* <ComicPage /> */}
      <Comic />
      {/* <ComicPanel /> */}
    </>
  );
}
