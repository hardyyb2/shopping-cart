import { Button } from "../common";

interface IProps {
  onClick: () => void;
}

const RESTORE_BUTTON_TEXT = "Restore Items";

const RestoreButton: React.FC<IProps> = ({ onClick }) => {
  return (
    <Button borderRadius={32} onClick={onClick}>
      {RESTORE_BUTTON_TEXT}
    </Button>
  );
};

export default RestoreButton;
