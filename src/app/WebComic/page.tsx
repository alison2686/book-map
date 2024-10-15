'use client';
import { PanelData } from '../../components/panel/data';
import ComicPanel from '../../components/panel';

function WebComic() {
  return (
    <div>
      <h1 className='comic-title'>Web Comic</h1>
      {PanelData.map((panel, panelId) => {
        return <ComicPanel key={panelId} {...panel} />;
      })}
    </div>
  );
}

export default WebComic;
