import { ItemTile, Counter } from "../";
import { Currency } from "../../utils";

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
  return (
    <GroupWrapper>
      <GroupContainer>
        <ItemTileContainer>
          <ItemTile title={title} imgSrc={imgSrc} />
        </ItemTileContainer>
        <CounterContainer>
          <Counter quantity={quantity} id={id} />
        </CounterContainer>
        <PriceContainer>
          {Currency.current} {price}
        </PriceContainer>
      </GroupContainer>
    </GroupWrapper>
  );
};

export default ItemGroup;
