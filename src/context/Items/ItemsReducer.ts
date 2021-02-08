import { ItemsActionTypes, ItemsState, ChangeProps } from "./types";
import {
  decrementItem,
  deleteItem,
  incrementItem,
  restoreItems,
} from "./ItemsSelectors";
import { data } from "../../bin";
import { NotificationTypes, notify } from "../../utils";

export const itemTypes = {
  SET_CART: "SET_CART",
  ADD_ITEM: "ADD_ITEM",
  SUBTRACT_ITEM: "SUBTRACT_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  RESTORE_ITEMS: "RESTORE_ITEMS",
};

const Reducer = (state: ItemsState, action: ItemsActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case itemTypes.SET_CART:
      return {
        ...state,
        ...payload,
      };

    case itemTypes.ADD_ITEM:
      if (state.items) {
        const newState: ChangeProps = incrementItem(state.items, payload);

        return {
          ...state,
          ...newState,
        };
      }
      return {
        ...state,
      };

    case itemTypes.SUBTRACT_ITEM:
      if (state.items) {
        const newState: ChangeProps = decrementItem(state.items, payload);

        return {
          ...state,
          ...newState,
        };
      }
      return {
        ...state,
      };

    case itemTypes.DELETE_ITEM:
      if (state.items) {
        const newState: ChangeProps = deleteItem(state.items, payload);

        notify({ message: `Deleted Item`, type: NotificationTypes.ERROR });

        return {
          ...state,
          ...newState,
        };
      }
      return {
        ...state,
      };

    case itemTypes.RESTORE_ITEMS:
      const newState: ChangeProps = restoreItems(data);

      notify({ message: "Restored Items", type: NotificationTypes.SUCCESS });

      return {
        ...state,
        ...newState,
      };

    default:
      return state;
  }
};

export default Reducer;
