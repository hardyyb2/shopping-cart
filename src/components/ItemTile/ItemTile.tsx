import { useContext } from "react";

import { ImageContainer, Image, IconButton } from "../common";
import { DeleteIcon } from "../../assets";
import { ItemsContext, itemTypes } from "../../context/Items";

import { TileWrapper, TileContainer, TitleContainer } from "./ItemTile.styles";

interface IProps {
  id: number;
  imgSrc?: string;
  title: string;
}

const ItemTile: React.FC<IProps> = ({ id, imgSrc, title }) => {
  const [_, itemsDispatch] = useContext(ItemsContext);

  const handleDelete = (itemId: number) => {
    itemsDispatch({ type: itemTypes.DELETE_ITEM, payload: itemId });
  };

  return (
    <TileWrapper>
      <TileContainer>
        <ImageContainer width={40}>
          <Image src={imgSrc} alt={title} />
        </ImageContainer>
        <TitleContainer>{title}</TitleContainer>
        <IconButton width={30} onClick={() => handleDelete(id)}>
          <Image src={DeleteIcon} alt="delete" />
        </IconButton>
      </TileContainer>
    </TileWrapper>
  );
};

export default ItemTile;
