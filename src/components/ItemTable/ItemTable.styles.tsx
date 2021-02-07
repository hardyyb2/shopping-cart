import styled from "styled-components";

import { Flex } from "../common";

export const TableWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

export const TableContainer = styled(Flex)`
  flex-direction: column;
`;

export const TitleContainer = styled(Flex)``;

export const Title = styled.div`
  text-align: center;
  width: 100%;
`;

export const TableHeadersContainer = styled(Flex)``;

export const TableHeader = styled.div<{ width?: number }>`
  width: ${({ width }) =>
    width ? `${width}px` : "calc(var(--default-dimension)*2)"};
  padding: var(--size);

  &:nth-child(1) {
    flex: 0 1 60%;
  }
  &:nth-child(2) {
    flex: 0 1 20%;
  }
  &:nth-child(3) {
    flex: 0 1 20%;
  }
`;

export const RowsContainer = styled(Flex)`
  flex-direction: column;
`;

export const Row = styled.div`
  padding: var(--size);
`;
