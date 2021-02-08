export interface TypeDiscountProps {
  type: string;
  discount: number;
}

export const TypeDiscounts: TypeDiscountProps[] = [
  {
    type: "fiction",
    discount: 15,
  },
];

export enum NotificationTypes {
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
  DEFAULT = "default",
  DARK = "dark",
}

export enum NotificationPositions {
  TOP_RIGHT = "top-right",
  TOP_CENTER = "top-center",
  TOP_LEFT = "top-left",
  BOTTOM_RIGHT = "bottom-right",
  BOTTOM_CENTER = "bottom-center",
  BOTTOM_LEFT = "bottom-left",
}
