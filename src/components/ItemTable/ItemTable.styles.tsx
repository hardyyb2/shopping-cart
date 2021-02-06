import styled from "styled-components";

import { Flex } from "../common";

export const TableWrapper = styled.div``;

export const TableContainer = styled(Flex)`
  flex-direction: column;
`;

export const TitleContainer = styled(Flex)``;

export const Title = styled.div``;

export const TableHeadersContainer = styled.div``;

export const TableHeader = styled.div<{ width?: number }>`
  width: ${({ width }) =>
    width ? `${width}px` : "calc(var(--default-dimension)*2)"};
`;

export const RowsContainer = styled(Flex)`
  flex-direction: column;
`;

export const Row = styled.div``;
