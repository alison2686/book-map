'use client';
import { PanelData } from '../../components/panel/data';
import ComicPanel from '../../components/panel';
import ComicCover from '@/components/web-comic-cover';

function WebComic() {
  return (
    <div>
      <h1 className='comic-title'>Web Comic</h1>
      <ComicCover />
      {PanelData.map((panel, panelId) => {
        return <ComicPanel key={panelId} {...panel} />;
      })}
    </div>
  );
}

export default WebComic;
