import { ImageContainer, Image, IconButton } from "../common";
import { DeleteIcon } from "../../assets";

import { TileWrapper, TileContainer, TitleContainer } from "./ItemTile.styles";

interface IProps {
  imgSrc?: string;
  title: string;
  handleDeleteItem: () => void;
}

enum Dimensions {
  ICON_BUTTON_WIDTH = 30,
  IMAGE_CONTAINER_WIDTH = 40,
  IMAGE_BORDER_RADIUS = 8,
}

const ItemTile: React.FC<IProps> = ({ imgSrc, title, handleDeleteItem }) => {
  return (
    <TileWrapper>
      <TileContainer>
        <ImageContainer width={Dimensions.IMAGE_CONTAINER_WIDTH}>
          <Image
            src={imgSrc}
            alt={title}
            borderRadius={Dimensions.IMAGE_BORDER_RADIUS}
          />
        </ImageContainer>
        <TitleContainer>{title}</TitleContainer>
        <IconButton
          width={Dimensions.ICON_BUTTON_WIDTH}
          onClick={handleDeleteItem}
        >
          <Image src={DeleteIcon} alt="delete" />
        </IconButton>
      </TileContainer>
    </TileWrapper>
  );
};

export default ItemTile;
