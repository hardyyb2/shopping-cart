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
    totalTypeDiscount = 0;

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

  return {
    totalPrice,
    totalItems,
    totalNormalDiscount: parseFloat(totalNormalDiscount.toFixed(1)),
    totalTypeDiscount: parseFloat(totalTypeDiscount.toFixed(1)),
  };
};
