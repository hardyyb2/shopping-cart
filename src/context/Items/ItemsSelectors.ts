import {
  calculateTotalPriceAndItems,
  saveToLocalStorage,
} from "../../utils/functions";
import { DataProps } from "../../utils/types";

import { ChangeProps } from "./types";
import { ITEMS_KEY } from "./constants";

enum ChangeType {
  ADD = "add",
  SUBTRACT = "sub",
}

const setItems = (items: DataProps[], payload: any, type: ChangeType) => {
  let newItems = [...items];

  newItems = newItems.map((item) => {
    if (item.id === payload) {
      let newItem = { ...item };
      newItem.quantity =
        type === ChangeType.ADD
          ? item.quantity + 1
          : ChangeType.SUBTRACT
          ? item.quantity > 0
            ? item.quantity - 1
            : item.quantity
          : item.quantity;

      return newItem;
    }

    return item;
  });

  saveToLocalStorage(ITEMS_KEY, newItems);

  let priceItemsDiscount = calculateTotalPriceAndItems(newItems);

  return {
    items: newItems,
    ...priceItemsDiscount,
  };
};

export const incrementItem = (
  items: DataProps[],
  payload: any
): ChangeProps => {
  return setItems(items, payload, ChangeType.ADD);
};

export const decrementItem = (
  items: DataProps[],
  payload: any
): ChangeProps => {
  return setItems(items, payload, ChangeType.SUBTRACT);
};

export const deleteItem = (items: DataProps[], payload: any): ChangeProps => {
  let newItems = items.filter((item) => item.id !== payload);

  saveToLocalStorage(ITEMS_KEY, newItems);

  let priceItemsDiscount = calculateTotalPriceAndItems(newItems);

  return {
    items: newItems,
    ...priceItemsDiscount,
  };
};

export const restoreItems = (items: DataProps[]): ChangeProps => {
  saveToLocalStorage(ITEMS_KEY, items);

  let priceItemsDiscount = calculateTotalPriceAndItems(items);

  return {
    items,
    ...priceItemsDiscount,
  };
};
