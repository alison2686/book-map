import BackButton from '../buttons/BackButton';

const ComicCover = () => {
  return (
    <div className='w-full px-4 py-8'>
      <div className='comic-dots w-full sm:w-11/12 md:w-4/5 lg:w-3/4 h-full mx-auto p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center '>
        <h1 className='text-3xl  sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold tracking-widest mb-6 font-comic text-[#996515] drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]'>
          Sojourners to Joke Sings: <br /> Tales of Chinatown and Beyond
        </h1>
        <h3 className='text-xl sm:text-xl md:text-2xl text-center font-bold leading-snug tracking-widest mb-6 font-comic text-[#996515] drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)]'>
          Check out the web comic <br /> for select chapters of the book
        </h3>

        <p className='text-sm text-amber-50 sm:text-base lg:text-lg leading-relaxed max-w-3xl text-center md:text-left mb-4'>
          “Uncle Ron, look at what Grandma wrote, it reads like something out of
          <em> Warrior.</em>” He handed me a large green binder with the title
          <em> Joke Sings</em>. It turned out to be a book written by LK Lennie
          Lee (1923–2021), my mother, Erik’s grandmother. “What’s
          <em> Warrior</em>?” I asked. He explained it was a television series
          about Chinatown in the 1880s and was based on an 8-page “treatment”
          written by Bruce Lee in the 1970s. Stories by Bruce Lee versus tales
          by an elderly grandmother seemed unlikely. It turned out Lennie’s
          stories were arguably more adventurous and exciting than Bruce’s or
          those written by
          <em> Warrior</em> producers.
        </p>

        <p className='text-sm text-amber-50 sm:text-base lg:text-lg leading-relaxed max-w-3xl text-center md:text-left mt-4'>
          For example, Lennie writes that her ancestors were the inspiration for
          one of the greatest adventure stories ever written — Robert Louis
          Stevenson’s <em>Treasure Island</em>. Knowing there would be doubters,
          our family did research to confirm plausibility. Enough was collected
          that a book was produced. A bonus is that her incredible recall
          allowed for detailed descriptions of Chinatown life beyond the façade
          of tourism. Realizing this work would appeal to young people, it was
          decided to produce a web comic version of certain chapters that has
          the look and feel of a graphic novel.
        </p>
      </div>
    </div>
  );
};

export default ComicCover;
