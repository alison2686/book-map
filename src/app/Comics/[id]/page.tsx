import { PanelData } from '../../../components/panel/data';
import ComicPanel from '../../../components/panel';

interface PageProps {
  params: {
    id: string;
  };
}

export default function ComicPage({ params }: PageProps) {
  const panel = PanelData.find((p) => String(p.id) === String(params.id));
  console.log('params.id:', params.id);
  console.log(
    'PanelData ids:',
    PanelData.map((p) => p.id)
  );

  if (!panel) {
    return <div>Comic panel not found</div>;
  }

  return <ComicPanel {...panel} />;
}
