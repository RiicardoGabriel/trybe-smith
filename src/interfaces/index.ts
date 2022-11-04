export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface IProductGet extends IProduct {
  orderId?: number;
}

export interface IUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}