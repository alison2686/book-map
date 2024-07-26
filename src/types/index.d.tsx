export interface PopupCardProps {
  id: string;
  title: string;
  chapter: string;
  page: string;
  subtitle: string;
  onClose: () => void; // Add an onClose prop
}

export interface PopupState {
  visible: boolean;
  content: PopupCardProps | null;
  top: number;
  left: number;
}
