import styled from "styled-components";

import {
  ImageContainerProps,
  ImageProps,
  ButtonProps,
  IconButtonProps,
} from "./types";

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

export const ImageContainer = styled(Flex)<ImageContainerProps>`
  width: ${({ width }) => (width ? `${width}px` : "var(--default-dimension)")};
  min-width: ${({ width }) =>
    width ? `${width}px` : "var(--default-dimension)"};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  min-height: ${({ height }) =>
    height ? `${height}px` : "var(--default-dimension)"};
  object-fit: cover;
  align-items: center;

  @media (max-width: 360px) {
    width: ${({ width }) =>
      width ? `calc(${width}px / 1.25)` : "var(--default-dimension)"};

    min-width: ${({ width }) =>
      width ? `calc(${width}px / 1.25)}` : "var(--default-dimension)"};
  }
`;

export const Image = styled.img<ImageProps>`
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : 0};
`;

export const IconButton = styled.button<IconButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : "var(--default-dimension)")};
  min-width: ${({ width }) =>
    width ? `${width}px` : "var(--default-dimension)"};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  overflow: hidden;
  border: none;
  padding: 0px;
  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  @media (max-width: 360px) {
    width: ${({ width }) =>
      width ? `calc(${width}px / 1.25)` : "var(--default-dimension)"};

    min-width: ${({ width }) =>
      width ? `calc(${width}px / 1.25)}` : "var(--default-dimension)"};
  }
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
  color: ${({ color }) => (color ? `${color}` : "var(--default-button-color)")};

  &:hover {
    box-shadow: var(--button-shadow);
  }
`;
