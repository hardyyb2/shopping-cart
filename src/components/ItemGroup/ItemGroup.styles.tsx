import styled from "styled-components";

import { SpaceBetweenFlex } from "../common";

export const GroupWrapper = styled.div`
  width: auto;
`;

export const GroupContainer = styled(SpaceBetweenFlex)``;

export const ItemTileContainer = styled.div`
  flex: 0 1 60%;
  @media (max-width: 480px) {
    flex: 0 1 50%;
  }
`;

export const CounterContainer = styled.div`
  flex: 0 1 20%;
  padding: 0px var(--size);
  @media (max-width: 480px) {
    flex: 0 1 25%;
  }
`;

export const PriceContainer = styled.div`
  flex: 0 1 20%;
  font-family: var(--number-font);
  font-weight: bold;
  @media (max-width: 480px) {
    flex: 0 1 25%;
  }
`;
