export interface DataProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discount: number;
  type: string;
  img_url: string;
}

export interface ButtonProps {
  width?: number;
  height?: number;
  background?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: number;
}
