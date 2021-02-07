import { toast } from "react-toastify";

import { TypeDiscountProps, TypeDiscounts } from "../constants";
import { DataProps } from "../types";

export const isTypeDiscountedAndValue = (
  item: DataProps
): TypeDiscountProps | undefined => {
  return TypeDiscounts.find((discount) => discount.type === item.type);
};

export const calculateTotalPriceAndItems = (items: DataProps[]) => {
  let totalPrice = 0,
    totalItems = 0,
    totalNormalDiscount = 0,
    totalTypeDiscount = 0,
    orderTotal = 0;

  items.length &&
    items.forEach((item) => {
      totalPrice += item.price * item.quantity;
      totalItems += item.quantity;
      totalNormalDiscount += (item.discount * item.price * item.quantity) / 100;

      let typeDiscounted = isTypeDiscountedAndValue(item);
      if (typeDiscounted) {
        totalTypeDiscount +=
          (typeDiscounted.discount * item.price * item.quantity) / 100;
      }
    });

  orderTotal = totalPrice - totalNormalDiscount - totalTypeDiscount;

  return {
    totalPrice,
    totalItems,
    totalNormalDiscount: parseFloat(totalNormalDiscount.toFixed(1)),
    totalTypeDiscount: parseFloat(totalTypeDiscount.toFixed(1)),
    orderTotal,
  };
};

export interface NotificationProps {
  message: string;
  type?: "info" | "warning" | "error" | "success" | "default" | "dark";
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
  closeIn?: number;
}

export const notify = (props: NotificationProps) => {
  const { message, type, position, closeIn } = props;
  toast(message, {
    type: type || "info",
    position: position || "top-right",
    autoClose: closeIn || 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

export const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string): any | null => {
  let items = localStorage.getItem(key);

  if (items) {
    return JSON.parse(items);
  }
  return null;
};
