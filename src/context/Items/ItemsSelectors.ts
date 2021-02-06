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
  } = calculateTotalPriceAndItems(newItems);

  return {
    items: newItems,
    totalPrice,
    totalItems,
    totalNormalDiscount,
    totalTypeDiscount,
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
