import { Currency } from "../../utils";

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
  return (
    <CardWrapper>
      <CardContainer>
        <TitleContainer>
          <Title></Title>
        </TitleContainer>
        <PriceWrapper>
          <PriceCard title="Hello" price={10} />
        </PriceWrapper>
        <TotalContainer>
          <PriceCard title="total" price={10} />
        </TotalContainer>
      </CardContainer>
    </CardWrapper>
  );
};

export default OrderCard;
