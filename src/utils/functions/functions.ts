import { DataProps } from "../types";

export const calculateTotalPriceAndItems = (items: DataProps[]) => {
  let totalPrice = 0,
    totalItems = 0;

  items.length &&
    items.forEach((item) => {
      totalPrice += item.price * item.quantity;
      totalItems += item.quantity;
    });

  return {
    totalPrice,
    totalItems,
  };
};
