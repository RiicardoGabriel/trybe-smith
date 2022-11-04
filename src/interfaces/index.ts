export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface IProductGet extends IProduct {
  orderId?: number;
}

export interface IUser {
  username: string;
  classe?: string;
  level?: number;
  password: string;
}

export interface IOrder {
  id: number;
  userId: number;
  productsIds: number;
}