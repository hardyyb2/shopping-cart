import styled from "styled-components";

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

export const IconButton = styled.button<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? width : 50)}px;
  min-width: ${({ width }) => (width ? width : 50)}px;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  overflow: hidden;
  border: none;
  padding: 0px;
  background-color: transparent;
`;
