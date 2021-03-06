import styled from "styled-components";

import { Flex } from "../common";

export const TableWrapper = styled.div`
  width: 700px;
  margin: 0px calc(var(--size) * 4) calc(var(--size) * 3);
  box-shadow: var(--box-shadow);
  border-radius: calc(var(--size) * 5);
  padding: calc(var(--size) * 5);

  @media (max-width: 960px) {
    width: 92%;
  }
  @media (max-width: 480px) {
    padding: calc(var(--size) * 5) calc(var(--size) * 2);
  }
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
  @media (max-width: 480px) {
    font-size: calc(var(--size) * 3);
  }
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

  @media (max-width: 480px) {
    &:nth-child(1) {
      flex: 0 1 50%;
    }
    &:nth-child(2) {
      flex: 0 1 25%;
    }
    &:nth-child(3) {
      flex: 0 1 25%;
    }
  }
`;

export const RowsContainer = styled(Flex)`
  flex-direction: column;
`;

export const Row = styled.div`
  padding: var(--size);
  border-bottom: 1px solid var(--light-gray);
  @media (max-width: 480px) {
    padding: var(--size) 0px;
  }
`;

export const NoItemsContainer = styled.div`
  padding: calc(var(--size) * 2);
  color: var(--off-black);
`;
