import styled from "styled-components";

export const TileWrapper = styled.div`
  width: 300px;
  height: 100px;
`;

export const TileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0px 10px;
`;
