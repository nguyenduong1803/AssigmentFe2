export interface IOrder {
    _id: string;
  userId: string;
  address: string;
  phoneNumber: string;
  note: string;
  createdAt: string;
  totalMoney: number;
  status?: number;
  products: ICart[];
}
interface ICart {
  userId: string;
  productId: string;
  quantity: number;
}
