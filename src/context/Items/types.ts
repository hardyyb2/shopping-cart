import { DataProps } from "../../utils";

export interface ItemsState {
  items: null | DataProps[];
  totalPrice: number;
  totalItems: number;
  discount: number;
  totalDiscount: number;
  totalNormalDiscount: number;
  totalTypeDiscount: number;
  orderTotal: number;
}

export interface ItemsActionTypes {
  type: string;
  payload?: any;
}

export interface ChangeProps {
  items: DataProps[];
  totalPrice: number;
  totalItems: number;
  totalNormalDiscount: number;
  totalTypeDiscount: number;
  orderTotal: number;
}

export const ITEMS_KEY = "items";
