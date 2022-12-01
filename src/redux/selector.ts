import { ICart } from "../Types/Interface/Order";

// cart
export const selectCart = (state: any) => {
  return state.CartSlice.cart;
};
