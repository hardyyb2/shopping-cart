export enum Currency {
  current = "$",
  dollars = "$",
}

export interface TypeDiscountProps {
  type: string;
  discount: number;
}

export const TypeDiscounts: TypeDiscountProps[] = [
  {
    type: "fiction",
    discount: 15,
  },
];
