import { createContext, Dispatch, ReactNode, useReducer } from "react";

import ItemsReducer from "./ItemsReducer";
import { ActionTypes, IState } from "./types";

const initialState: IState = {
  items: null,
};

export const ItemsContext = createContext<any>(initialState);

interface IProps {
  children?: ReactNode;
}

const ItemsStore: React.FC<IProps> = ({ children }) => {
  const [state, dispatch]: [IState, Dispatch<ActionTypes>] = useReducer(
    ItemsReducer,
    initialState
  );

  return (
    <ItemsContext.Provider value={[state, dispatch]}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsStore;
