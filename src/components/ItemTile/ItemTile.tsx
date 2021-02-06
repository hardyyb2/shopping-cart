import { ImageContainer, Image, IconButton } from "../common";

import { TileWrapper, TileContainer, TitleContainer } from "./ItemTile.styles";

import { DeleteIcon } from "../../assets";

interface IProps {
  imgSrc?: string;
  title: string;
}

const ItemTile: React.FC<IProps> = ({ imgSrc, title }) => {
  return (
    <TileWrapper>
      <TileContainer>
        <ImageContainer width={40}>
          <Image src={imgSrc} alt={title} />
        </ImageContainer>
        <TitleContainer>{title}</TitleContainer>
        <IconButton width={30}>
          <Image src={DeleteIcon} alt="delete" />
        </IconButton>
      </TileContainer>
    </TileWrapper>
  );
};

export default ItemTile;
