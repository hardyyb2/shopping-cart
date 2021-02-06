import { DataProps } from "../../utils";

export interface ItemsState {
  items: null | DataProps[];
  totalPrice: number;
  totalItems: number;
  discount: number;
  totalDiscount: number;
}

export interface ItemsActionTypes {
  type: string;
  payload?: any;
}
