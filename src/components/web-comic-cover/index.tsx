import BackButton from '../buttons/BackButton';

const ComicCover = () => {
  return (
    <div>
      {/* <BackButton /> */}
      <div className=''>
        <div className='comic-bg border-4 border-black lg:max-w-screen-lg lg:max-h-[100vh] h-full flex flex-col items-center justify-center p-4 md:p-8'>
          <h1 className='comic-title text-3xl md:text-5xl lg:text-7xl text-center leading-tight md:leading-snug lg:leading-normal'>
            Becoming American: <br className='hidden md:block' /> A 600-Year
            Odyssey
          </h1>
          <h2 className='mt-4 md:mt-8 text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-2xl'>
            “Uncle Ron, look at what Grandma wrote, it reads like something out
            of “Warrior.’ He handed me a large green binder with the title Joke
            Sings. It turned out to be a book written by LK Lennie Lee
            (1923-2021) my mother, Erik’s grandmother. “What’s Warrior?” I
            asked. He explained it was a television series about Chinatown in
            the 1880s and was based on an 8-page “treatment” written by Bruce
            Lee in the 1970s. Stories by Bruce Lee versus tales by an elderly
            grandmother seemed unlikely. It turned out Lennie’s stories were
            arguably more adventurous and exciting than Bruce’s or those written
            by Warrior producers. For example, Lennie writes that her ancestors
            were the inspiration for one of the greatest adventure stories ever
            written, Robert Louis Stevenson’s Treasure Island. Knowing there
            would be doubters, our family did research to confirm plausibility.
            Enough was collected that a book was produced. A bonus is that her
            incredible recall allowed for detailed descriptions of Chinatown
            life beyond the façade of tourism. Realizing this work would appeal
            to young people, it was decided to produce this version that has the
            look and feel of a graphic novel.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ComicCover;
