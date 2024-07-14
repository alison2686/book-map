'use client';
import { PanelData } from '../../components/panel/data';
import ComicPanel from '../../components/panel';

function Comic() {
  return (
    <div>
      {PanelData.map((panel, index) => {
        return <ComicPanel key={index} {...panel} />;
      })}
    </div>
  );
}

export default Comic;
