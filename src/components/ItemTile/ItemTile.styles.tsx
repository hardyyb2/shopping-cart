import styled from "styled-components";

import { SpaceBetweenFlex } from "../common";

export const TileWrapper = styled.div`
  padding: 0px var(--size);
`;

export const TileContainer = styled(SpaceBetweenFlex)``;

export const TitleContainer = styled.div`
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0px var(--size);
`;
