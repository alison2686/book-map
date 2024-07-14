'use client';
import { PanelData } from '../../components/panel/data';
import ComicPanel from '../../components/panel';

function Comic() {
  return (
    <div>
      {PanelData.map((panel, panelId) => {
        return <ComicPanel key={panelId} {...panel} />;
      })}
    </div>
  );
}

export default Comic;
