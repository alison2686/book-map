export default function Hero() {
  return (
    <div className='container mx-auto px-4'>
      <div className='w-full h-screen flex flex-col justify-center items-center text-white bg-seafoam'>
        <h1 className='text-4xl lg:text-6xl font-bold text-shadow-lg'>
          Becoming American: <br /> A 600 Year Odyssey
        </h1>
        <h2 className='text-2xl lg:text-3xl font-semibold mt-4 text-shadow-md'>
          Based On An Autobiography and Memoir <br /> By L.K. Lennie Lee, Nee
          Chow (1923-2021)
        </h2>
        <h2 className='text-center mb-4 text-2xl lg:text-3xl font-semibold mt-4 text-shadow-md'>
          About the Authors
        </h2>
        <h4 className='mx-auto p-4 max-w-2xl text-center text-lg leading-relaxed'>
          Lennie Lee and son Ron Lee had similar careers as real estate
          investors and public school teachers. In her spare time, she wrote an
          extensive autobiography and memoir that included detailed observations
          of life in San Francisco’s Chinatown beyond the facade of tourism.
          <br />
          Ron spent his free time advocating for a variety of issues involving
          Asian American Native Hawaiian Pacific Islanders. At Lennie’s request
          he was directed, along with his two daughters and nephews, to edit and
          add to her work. The result is an extraordinary adventure story and a
          description of the entire Chinese diaspora.
        </h4>
      </div>
    </div>
  );
}
