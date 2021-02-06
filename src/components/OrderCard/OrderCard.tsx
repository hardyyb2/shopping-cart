import { useContext } from "react";

import { Currency } from "../../utils";
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

interface PriceCardProps {
  title: string;
  price: number;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price }) => (
  <PriceContainer>
    <ItemName>{title}</ItemName>
    <ItemPrice>
      {Currency.dollars}
      {price}
    </ItemPrice>
  </PriceContainer>
);

interface OrderCardProps {}

const OrderCard: React.FC<OrderCardProps> = () => {
  const [itemsState] = useContext(ItemsContext);

  return (
    <CardWrapper>
      <CardContainer>
        <TitleContainer>
          <Title></Title>
        </TitleContainer>
        <PriceWrapper>
          <PriceCard
            title={`Items (${itemsState.totalItems})`}
            price={itemsState.totalPrice}
          />
        </PriceWrapper>
        <TotalContainer>
          <PriceCard title="Discount" price={itemsState.totalNormalDiscount} />
          <PriceCard
            title="Type Discount"
            price={itemsState.totalTypeDiscount}
          />
          <PriceCard title="Order Total" price={itemsState.orderTotal} />
        </TotalContainer>
      </CardContainer>
    </CardWrapper>
  );
};

export default OrderCard;
