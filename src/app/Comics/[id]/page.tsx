import { PanelData } from '../../../components/panel/data';
import ComicPanel from '../../../components/panel';

interface Params {
  params: {
    id: string;
  };
}

const ComicPage = ({ params }: Params) => {
  const { id } = params;

  const panel = PanelData.find((panel) => panel.id === id);

  if (!panel) {
    return <div>Comic panel not found</div>;
  }

  return (
    <div>
      <ComicPanel {...panel} />
    </div>
  );
};

export default ComicPage;
