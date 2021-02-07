import { calculateTotalPriceAndItems, DataProps } from "../../utils";

enum ChangeType {
  ADD = "add",
  SUBTRACT = "sub",
}

interface ChangeProps {
  items: DataProps[];
  totalPrice: number;
  totalItems: number;
  totalNormalDiscount: number;
  totalTypeDiscount: number;
  orderTotal: number;
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

  localStorage.setItem("items", JSON.stringify(newItems));

  let {
    totalItems,
    totalPrice,
    totalNormalDiscount,
    totalTypeDiscount,
    orderTotal,
  } = calculateTotalPriceAndItems(newItems);

  return {
    items: newItems,
    totalPrice,
    totalItems,
    totalNormalDiscount,
    totalTypeDiscount,
    orderTotal,
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

  localStorage.setItem("items", JSON.stringify(newItems));

  let {
    totalItems,
    totalPrice,
    totalNormalDiscount,
    totalTypeDiscount,
    orderTotal,
  } = calculateTotalPriceAndItems(newItems);

  return {
    items: newItems,
    totalPrice,
    totalItems,
    totalNormalDiscount,
    totalTypeDiscount,
    orderTotal,
  };
};
