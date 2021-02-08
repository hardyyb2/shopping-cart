import styled from "styled-components";

import { Flex, SpaceBetweenFlex } from "../common";

export const CardWrapper = styled.div`
  margin: calc(var(--size) * 5) auto;
  max-width: 300px;
  box-shadow: var(--box-shadow);
  border-radius: calc(var(--size) * 3);
  padding: calc(var(--size) * 3);
`;

export const CardContainer = styled(Flex)`
  flex-direction: column;
`;

export const TitleContainer = styled.div``;

export const Title = styled.div`
  font-family: var(--secondary-font);
  font-size: calc(var(--size) * 2.5);
  text-align: left;
  color: var(--black);
`;

export const PriceWrapper = styled(Flex)`
  flex-direction: column;
  margin-top: calc(var(--size) * 2);
`;

export const PriceContainer = styled(SpaceBetweenFlex)`
  width: 100% !important;
  padding-bottom: var(--size);
`;

export const ItemName = styled.div``;

export const ItemPrice = styled.div`
  font-family: var(--number-font);
`;

export const TotalContainer = styled(SpaceBetweenFlex)`
  font-weight: bold;
  background: var(--blue);
  padding: calc(var(--size) * 1.5);
  color: var(--white);
  border-radius: var(--size);
  margin: calc(var(--size) * 2) calc(var(--size) * -1.5) 0px;
  & > div:first-child {
    padding-bottom: 0px;
    & > div:first-child {
      font-weight: 300;
    }
  }
`;
