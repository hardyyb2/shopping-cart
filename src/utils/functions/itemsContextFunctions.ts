import { toast } from "react-toastify";

import { TypeDiscountProps, TypeDiscounts } from "../constants";
import { DataProps, NotificationProps } from "../types";

const isTypeDiscountedAndValue = (
  item: DataProps
): TypeDiscountProps | undefined => {
  return TypeDiscounts.find((discount) => discount.type === item.type);
};

const calcNormalDiscount = (item: DataProps) =>
  (item.discount * item.price * item.quantity) / 100;

const calcTypeDiscount = (item: DataProps, typeDiscounted: TypeDiscountProps) =>
  (typeDiscounted.discount * item.price * item.quantity) / 100;

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
      totalNormalDiscount += calcNormalDiscount(item);

      let typeDiscounted = isTypeDiscountedAndValue(item);
      if (typeDiscounted) {
        totalTypeDiscount += calcTypeDiscount(item, typeDiscounted);
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
