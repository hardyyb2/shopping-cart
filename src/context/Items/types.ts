import { DataProps } from "../../utils";

export interface ItemsState {
  items: null | DataProps[];
}

export interface ItemsActionTypes {
  type: string;
  payload?: any;
}
