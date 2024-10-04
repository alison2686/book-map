'use client';
import { PanelData } from '../panel/data';
import ComicPanel from '../panel';

function Comic() {
  return (
    <>
      <div>
        <div className='container mx-auto p-4'>
          {PanelData.map((panel, index) => {
            return <ComicPanel key={index} {...panel} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Comic;
