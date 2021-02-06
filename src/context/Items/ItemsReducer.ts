import { ItemsActionTypes, ItemsState } from "./types";

export const itemTypes = {
  SET_CART: "SET_CART",
};

const Reducer = (state: ItemsState, action: ItemsActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case itemTypes.SET_CART:
      return {
        ...state,
        items: payload,
      };

    default:
      return state;
  }
};

export default Reducer;
