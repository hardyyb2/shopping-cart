import styled from "styled-components";

export const ImageContainer = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "var(--default-dimension)")};
  min-width: ${({ width }) =>
    width ? `${width}px` : "var(--default-dimension)"};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  object-fit: cover;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const IconButton = styled.button<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "var(--default-dimension)")};
  min-width: ${({ width }) =>
    width ? `${width}px` : "var(--default-dimension)"};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  overflow: hidden;
  border: none;
  padding: 0px;
  background-color: transparent;
`;
