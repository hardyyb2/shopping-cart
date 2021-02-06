import { DataProps } from "../../utils";

enum ChangeType {
  ADD = "add",
  SUBTRACT = "sub",
}

interface ChangeProps {
  items: DataProps[];
  totalPrice: number;
  totalItems: number;
}

const setItems = (items: DataProps[], payload: any, type: ChangeType) => {
  let newItems = [...items];
  let totalItems = 0;
  let totalPrice = 0;

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

      totalPrice += newItem.quantity * newItem.price;
      totalItems += newItem.quantity;

      return newItem;
    }
    totalPrice += item.quantity * item.price;
    totalItems += item.quantity;

    return item;
  });

  localStorage.setItem("items", JSON.stringify(newItems));

  return { items: newItems, totalPrice, totalItems };
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
