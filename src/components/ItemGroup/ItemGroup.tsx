import { useContext } from "react";

import { ItemTile, Counter } from "../";
import { Currency } from "../../utils";
import { ItemsContext, itemTypes } from "../../context/Items";

import {
  CounterContainer,
  GroupContainer,
  GroupWrapper,
  ItemTileContainer,
  PriceContainer,
} from "./ItemGroup.styles";

interface IProps {
  id: number;
  title: string;
  imgSrc?: string;
  price: number;
  quantity: number;
}

const ItemGroup: React.FC<IProps> = ({
  id,
  title,
  imgSrc,
  price,
  quantity,
}) => {
  const [_, itemsDispatch] = useContext(ItemsContext);

  const handleAddItem = (itemId: number) => {
    itemsDispatch({ type: itemTypes.ADD_ITEM, payload: itemId });
  };

  const handleSubtractItem = (itemId: number) => {
    itemsDispatch({ type: itemTypes.SUBTRACT_ITEM, payload: itemId });
  };

  const handleDeleteItem = (itemId: number) => {
    itemsDispatch({ type: itemTypes.DELETE_ITEM, payload: itemId });
  };

  return (
    <GroupWrapper>
      <GroupContainer>
        <ItemTileContainer>
          <ItemTile
            title={title}
            imgSrc={imgSrc}
            handleDeleteItem={() => handleDeleteItem(id)}
          />
        </ItemTileContainer>
        <CounterContainer>
          <Counter
            quantity={quantity}
            handleAddItem={() => handleAddItem(id)}
            handleSubtractItem={() => handleSubtractItem(id)}
          />
        </CounterContainer>
        <PriceContainer>
          {Currency.current} {price}
        </PriceContainer>
      </GroupContainer>
    </GroupWrapper>
  );
};

export default ItemGroup;
