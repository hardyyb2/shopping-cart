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

export const ImageContainer = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? width : 50)}px;
  min-width: ${({ width }) => (width ? width : 50)}px;
  height: ${({ height }) => (height ? height : 50)}px;
  object-fit: cover;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const TitleContainer = styled.div`
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0px 10px;
`;

export const IconButton = styled.button<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? width : 50)}px;
  min-width: ${({ width }) => (width ? width : 50)}px;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  overflow: hidden;
  border: none;
  padding: 0px;
  background-color: transparent;
`;
