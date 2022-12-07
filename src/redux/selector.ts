import { RootState } from "./store";

// cart
export const selectCart = (state:RootState) => {
  return state.CartSlice.cart;
};
