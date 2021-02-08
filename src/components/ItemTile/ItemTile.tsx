import { ImageContainer, Image, IconButton } from "../common";
import { DeleteIcon } from "../../assets";

import { TileWrapper, TileContainer, TitleContainer } from "./ItemTile.styles";

interface IProps {
  imgSrc?: string;
  title: string;
  handleDeleteItem: () => void;
}

const ItemTile: React.FC<IProps> = ({ imgSrc, title, handleDeleteItem }) => {
  return (
    <TileWrapper>
      <TileContainer>
        <ImageContainer width={40}>
          <Image src={imgSrc} alt={title} />
        </ImageContainer>
        <TitleContainer>{title}</TitleContainer>
        <IconButton width={30} onClick={handleDeleteItem}>
          <Image src={DeleteIcon} alt="delete" />
        </IconButton>
      </TileContainer>
    </TileWrapper>
  );
};

export default ItemTile;
