import { ItemsActionTypes, ItemsState } from "./types";
import { decrementItem, incrementItem } from "./ItemsSelectors";

export const itemTypes = {
  SET_CART: "SET_CART",
  ADD_ITEM: "ADD_ITEM",
  SUBTRACT_ITEM: "SUBTRACT_ITEM",
};

const Reducer = (state: ItemsState, action: ItemsActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case itemTypes.SET_CART:
      return {
        ...state,
        items: payload.items,
        totalPrice: payload.totalPrice,
        totalItems: payload.totalItems,
      };

    case itemTypes.ADD_ITEM:
      if (state.items) {
        let { items, totalPrice, totalItems } = incrementItem(
          state.items,
          payload
        );

        return {
          ...state,
          items,
          totalPrice,
          totalItems,
        };
      }
      return {
        ...state,
      };

    case itemTypes.SUBTRACT_ITEM:
      if (state.items) {
        let { items, totalPrice, totalItems } = decrementItem(
          state.items,
          payload
        );

        return {
          ...state,
          items,
          totalPrice,
          totalItems,
        };
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default Reducer;
