import styled from "styled-components";

import { Flex, SpaceBetweenFlex } from "../common";

export const CardWrapper = styled.div`
  margin: calc(var(--size) * 5) auto;
  max-width: 300px;
`;

export const CardContainer = styled(Flex)`
  flex-direction: column;
`;

export const TitleContainer = styled.div``;

export const Title = styled.div``;

export const PriceWrapper = styled(Flex)`
  flex-direction: column;
`;

export const PriceContainer = styled(SpaceBetweenFlex)`
  width: 100% !important;
`;

export const ItemName = styled.div``;

export const ItemPrice = styled.div``;

export const TotalContainer = styled(SpaceBetweenFlex)`
  margin: calc(var(--size) * 2) 0;
`;
