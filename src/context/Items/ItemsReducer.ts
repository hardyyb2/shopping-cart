import { ItemsActionTypes, ItemsState } from "./types";
import { decrementItem, deleteItem, incrementItem } from "./ItemsSelectors";

export const itemTypes = {
  SET_CART: "SET_CART",
  ADD_ITEM: "ADD_ITEM",
  SUBTRACT_ITEM: "SUBTRACT_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
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
        totalNormalDiscount: payload.totalNormalDiscount,
        totalTypeDiscount: payload.totalTypeDiscount,
        orderTotal: payload.orderTotal,
      };

    case itemTypes.ADD_ITEM:
      if (state.items) {
        let {
          items,
          totalPrice,
          totalItems,
          totalNormalDiscount,
          totalTypeDiscount,
          orderTotal,
        } = incrementItem(state.items, payload);

        return {
          ...state,
          items,
          totalPrice,
          totalItems,
          totalNormalDiscount,
          totalTypeDiscount,
          orderTotal,
        };
      }
      return {
        ...state,
      };

    case itemTypes.SUBTRACT_ITEM:
      if (state.items) {
        let {
          items,
          totalPrice,
          totalItems,
          totalNormalDiscount,
          totalTypeDiscount,
          orderTotal,
        } = decrementItem(state.items, payload);

        return {
          ...state,
          items,
          totalPrice,
          totalItems,
          totalNormalDiscount,
          totalTypeDiscount,
          orderTotal,
        };
      }
      return {
        ...state,
      };

    case itemTypes.DELETE_ITEM:
      if (state.items) {
        const {
          items,
          totalPrice,
          totalItems,
          totalNormalDiscount,
          totalTypeDiscount,
          orderTotal,
        } = deleteItem(state.items, payload);

        return {
          ...state,
          items,
          totalPrice,
          totalItems,
          totalNormalDiscount,
          totalTypeDiscount,
          orderTotal,
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
