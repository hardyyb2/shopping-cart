export type { DataProps, ButtonProps, NotificationProps } from "./types";
export { Currency, TypeDiscounts, ItemTableHeaders } from "./constants";
export type {
  TypeDiscountProps,
  NotificationTypes,
  NotificationPositions,
} from "./constants";

export {
  calculateTotalPriceAndItems,
  notify,
  saveToLocalStorage,
  getFromLocalStorage,
} from "./functions";
