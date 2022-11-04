export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface IProductGet extends IProduct {
  orderId?: number;
}