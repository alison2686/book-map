import Image from 'next/image';

type Panel = {
  id: number;
  title: string;
  text: string;
  imgSrc: string;
  className: string;
};

const ComicPage = () => {
  const panels = [
    {
      id: 1,
      title: 'Panel 1',
      text: 'During the 1895 San Francisco Fair at Golden Gate Park, Hooligan Fong Ching, a city-slicker, police dupe, and stool pigeon, became involved with international kidnapping of Chinese girls from Hong Kong and China to dance at the Park’s events.',
      imgSrc: '/images/chinese-new-year.png',
      className: 'col-span-2 row-span-2',
    },
    {
      id: 2,
      title: 'Panel 2',
      text: 'The Arizona Suey Ying Tong men wanted to use the assassination of Hooligan Fong Ching to inform San Francisco’s rogue police, an unspoken warning to the rapscallion law enforcement.',
      imgSrc: '/images/comic-pagoda.png',
      className: 'col-span-1 row-span-1',
    },
    {
      id: 3,
      title: 'Panel 3',
      text: 'Before the assassination, San Francisco’s “Yellow Journalism” news media were forewarned about the impending murder, thus the newspaper reporters were at the murder scene minutes after the killing.',
      imgSrc: '/images/chinese-new-year.png',
      className: 'col-span-2 row-span-2',
    },
    // Add more panels as needed
  ];

  return (
    <div className='container mx-auto p-4 border-6 border-black max-w-4xl'>
      {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={`comic-panel border-4 border-black p-2 ${panel.className}`}
          >
            <h2 className='text-xl font-bold'>{panel.title}</h2>
            <div className='relative w-full h-48 mb-2'>
              <Image
                src={panel.imgSrc}
                alt={panel.title}
                layout='fill'
                objectFit='cover'
                className='rounded-md'
              />
            </div>
            <p>{panel.text}</p>
          </div>
        ))}
      </div> */}
      <div>
        <Image
          src='/images/Little-pete.png'
          alt='Little Pete'
          width={900}
          height={800}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default ComicPage;
