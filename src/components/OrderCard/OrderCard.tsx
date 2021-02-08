import { useContext } from "react";

import { Currency } from "../../utils/constants";
import { ItemsContext } from "../../context/Items";

import {
  CardContainer,
  CardWrapper,
  ItemName,
  ItemPrice,
  PriceContainer,
  PriceWrapper,
  Title,
  TitleContainer,
  TotalContainer,
} from "./OrderCard.styles";

enum PriceTypes {
  NEGATIVE = "- ",
  POSITIVE = "+ ",
}

interface PriceCardProps {
  title: string;
  price: number;
  type?: PriceTypes;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  type = PriceTypes.POSITIVE,
}) => (
  <PriceContainer>
    <ItemName>{title}</ItemName>
    <ItemPrice>
      {type === PriceTypes.NEGATIVE && PriceTypes.NEGATIVE}
      {Currency.current}
      {price}
    </ItemPrice>
  </PriceContainer>
);

const OrderCard: React.FC<{}> = () => {
  const [itemsState] = useContext(ItemsContext);

  return (
    <CardWrapper>
      <CardContainer>
        <TitleContainer>
          <Title>Total</Title>
        </TitleContainer>
        <PriceWrapper>
          <PriceCard
            title={`Items (${itemsState.totalItems})`}
            price={itemsState.totalPrice}
          />
          <PriceCard
            title="Discount"
            price={itemsState.totalNormalDiscount}
            type={PriceTypes.NEGATIVE}
          />
          <PriceCard
            title="Type Discount"
            price={itemsState.totalTypeDiscount}
            type={PriceTypes.NEGATIVE}
          />
        </PriceWrapper>
        <TotalContainer>
          <PriceCard title="Order Total" price={itemsState.orderTotal} />
        </TotalContainer>
      </CardContainer>
    </CardWrapper>
  );
};

export default OrderCard;
