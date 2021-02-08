import styled from "styled-components";

import { Flex } from "../common";

export const TableWrapper = styled.div`
  max-width: 700px;
  margin: auto;
  box-shadow: var(--box-shadow);
  border-radius: calc(var(--size) * 5);
  padding: calc(var(--size) * 5);
  margin-bottom: calc(var(--size) * 3);
`;

export const TableContainer = styled(Flex)`
  flex-direction: column;
`;

export const TitleContainer = styled(Flex)``;

export const Title = styled.div`
  text-align: center;
  width: 100%;
  font-family: var(--secondary-font);
  font-size: calc(var(--size) * 4);
  text-align: left;
  color: var(--black);
`;

export const TableHeadersContainer = styled(Flex)`
  margin-top: calc(var(--size) * 2);
`;

export const TableHeader = styled.div<{ width?: number }>`
  width: ${({ width }) =>
    width ? `${width}px` : "calc(var(--default-dimension)*2)"};
  padding: var(--size);
  font-size: calc(var(--size) * 2);
  color: var(--blue);
  font-weight: bold;

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
  border-bottom: 1px solid var(--light-gray);
`;
