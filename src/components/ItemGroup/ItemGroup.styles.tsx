import styled from "styled-components";

import { SpaceBetweenFlex } from "../common";

export const GroupWrapper = styled.div`
  width: auto;
`;

export const GroupContainer = styled(SpaceBetweenFlex)``;

export const ItemTileContainer = styled.div`
  flex: 0 1 60%;
`;

export const CounterContainer = styled.div`
  flex: 0 1 20%;
  padding: 0px var(--size);
`;

export const PriceContainer = styled.div`
  flex: 0 1 20%;
  font-family: var(--number-font);
  font-weight: bold;
`;
