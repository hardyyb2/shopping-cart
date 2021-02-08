import styled from "styled-components";

import { ButtonProps } from "../../utils";

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

export const ImageContainer = styled(Flex)<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "var(--default-dimension)")};
  min-width: ${({ width }) =>
    width ? `${width}px` : "var(--default-dimension)"};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  min-height: ${({ height }) =>
    height ? `${height}px` : "var(--default-dimension)"};
  object-fit: cover;
  align-items: center;
`;

export const Image = styled.img<{ borderRadius?: number }>`
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : 0};
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

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  border: ${({ color }) =>
    color ? `1px solid ${color}` : "1px solid var(--default-button-color)"};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : "var(--default-button-border)"};
  padding: var(--size) calc(var(--size) * 2);
  background: ${({ background }) =>
    background ? `${background}` : "var(--default-button-background)"};
  color: ${({ color }) =>
    color ? `${color}` : "var(--default-button-color)"}; ;
`;
