import styled from "styled-components";

import { Flex, SpaceBetweenFlex } from "../common";

export const CardWrapper = styled.div`
  width: 300px;
  box-shadow: var(--box-shadow);
  border-radius: calc(var(--size) * 3);
  padding: calc(var(--size) * 3);
  margin-right: calc(var(--size) * 3);
  margin-bottom: calc(var(--size) * 5);

  @media (max-width: 600px) {
    width: 92%;
    margin-right: auto;
    margin-left: auto;
  }
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

export const ItemName = styled.div`
  font-size: calc(var(--size) * 2);
  @media (max-width: 720px) {
    font-size: calc(var(--size) * 2.5);
  }
`;

export const ItemPrice = styled.div`
  font-family: var(--number-font);
  font-size: calc(var(--size) * 2);
  letter-spacing: 0.5px;
  @media (max-width: 720px) {
    font-size: calc(var(--size) * 2.5);
  }
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
