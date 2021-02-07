import styled from "styled-components";

import { SpaceBetweenFlex } from "../common";

export const CounterWrapper = styled.div``;

export const CounterContainer = styled(SpaceBetweenFlex)`
  display: flex;
  width: calc(var(--size) * 10);
  margin: auto;
`;

export const CountCountainer = styled.div`
  padding: 0px var(--size);
`;
