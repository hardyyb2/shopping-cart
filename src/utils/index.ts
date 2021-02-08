export type { DataProps, ButtonProps, NotificationProps } from "./types";
export {
  Currency,
  TypeDiscounts,
  ItemTableHeaders,
  NotificationTypes,
  NotificationPositions,
} from "./constants";
export type { TypeDiscountProps } from "./constants";

export {
  calculateTotalPriceAndItems,
  notify,
  saveToLocalStorage,
  getFromLocalStorage,
} from "./functions";
