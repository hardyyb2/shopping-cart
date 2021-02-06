import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const SpaceBetweenFlex = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;

export const CenterFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "var(--default-dimension)")};
  min-width: ${({ width }) =>
    width ? `${width}px` : "var(--default-dimension)"};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  min-height: ${({ height }) =>
    height ? `${height}px` : "var(--default-dimension)"};
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
