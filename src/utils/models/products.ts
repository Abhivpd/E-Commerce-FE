import { ReactElement } from "react";

export interface IProductCard {
  id: string;
  image: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
}

export interface ICartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
}

export interface IOrdersTable {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
}
