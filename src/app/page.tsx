import Hero from '@/components/hero';
import Map from '@/components/map';
import ComicPanel from '@/components/panel';
import ComicStrip from '@/components/strip';

const panels = [
  {
    image: '/images/chinese-new-year.png',
    text: 'During the 1895 San Francisco Fair at Golden Gate Park, Hooligan Fong Ching, a city-slicker, police dupe, and stool pigeon, became involved with international kidnapping of Chinese girls from Hong Kong and China to dance at the Park’s events.',
  },
  {
    image: '/images/comic-pagoda.png',
    text: 'The Arizona Suey Ying Tong men wanted to use the assassination of Hooligan Fong Ching to inform San Francisco’s rogue police, an unspoken warning to the rapscallion law enforcement.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Map />
      <ComicStrip panels={panels} />
      <ComicPanel />
    </>
  );
}
