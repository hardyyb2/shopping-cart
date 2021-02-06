import { createContext, Dispatch, ReactNode, useReducer } from "react";

import ItemsReducer from "./ItemsReducer";
import { ItemsActionTypes, ItemsState } from "./types";

const initialState: ItemsState = {
  items: null,
};

export const ItemsContext = createContext<any>(initialState);

interface IProps {
  children?: ReactNode;
}

const ItemsStore: React.FC<IProps> = ({ children }) => {
  const [state, dispatch]: [
    ItemsState,
    Dispatch<ItemsActionTypes>
  ] = useReducer(ItemsReducer, initialState);

  return (
    <ItemsContext.Provider value={[state, dispatch]}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsStore;
