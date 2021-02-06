import { DataProps } from "../../utils";

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

  localStorage.setItem("items", JSON.stringify(newItems));

  return newItems;
};

export const incrementItem = (
  items: DataProps[],
  payload: any
): DataProps[] => {
  return setItems(items, payload, ChangeType.ADD);
};

export const decrementItem = (
  items: DataProps[],
  payload: any
): DataProps[] => {
  return setItems(items, payload, ChangeType.SUBTRACT);
};
