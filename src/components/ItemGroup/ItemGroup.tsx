import { ItemTile, Counter } from "../";

import {
  CounterContainer,
  GroupContainer,
  GroupWrapper,
  ItemTileContainer,
  PriceContainer,
} from "./ItemGroup.styles";

interface IProps {
  title: string;
  imgSrc?: string;
  price: number;
  quantity: number;
}

enum Currency {
  dollars = "$",
}

const ItemGroup: React.FC<IProps> = ({ title, imgSrc, price, quantity }) => {
  return (
    <GroupWrapper>
      <GroupContainer>
        <ItemTileContainer>
          <ItemTile title={title} imgSrc={imgSrc} />
        </ItemTileContainer>
        <CounterContainer>
          <Counter quantity={quantity} />
        </CounterContainer>
        <PriceContainer>
          {Currency.dollars} {price}
        </PriceContainer>
      </GroupContainer>
    </GroupWrapper>
  );
};

export default ItemGroup;
