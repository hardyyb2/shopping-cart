import { Button } from "../common";

interface IProps {
  onClick: () => void;
}

const RestoreButton: React.FC<IProps> = ({ onClick }) => {
  return (
    <Button borderRadius={32} onClick={onClick}>
      Reload
    </Button>
  );
};

export default RestoreButton;
