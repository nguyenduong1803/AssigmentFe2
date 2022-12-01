export interface IOrder {
  _id: string;
  userId: string;
  address: string;
  recipientName: string;
  email: string;
  phoneNumber: string;
  note: string;
  createdAt: string;
  totalMoney: number;
  status?: number;
  products: ICart[];
}
export interface ICart {
  productId: string;
  quantity: number;
}
export type FormOrder ={
  userId: string;
  address: string;
  phoneNumber: string;
  note: string;
  recipientName: string;
  email: string;
  totalMoney: number;
  products: ICart[];
}
