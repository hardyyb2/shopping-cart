import {
  TileWrapper,
  TileContainer,
  TitleContainer,
  ImageContainer,
  Image,
  IconButton,
} from "./ItemTile.styles";

import DeleteIcon from "../../assets/images/delete.svg";

interface IProps {
  imgSrc?: string;
  title: string;
}

const ItemTile: React.FC<IProps> = ({ imgSrc, title }) => {
  return (
    <TileWrapper>
      <TileContainer>
        <ImageContainer>
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
