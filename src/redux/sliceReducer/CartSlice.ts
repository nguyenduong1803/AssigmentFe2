import { FormOrder } from "./../../Types/Interface/Order";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LocalStorage from "../../utils/LocalStorage";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: LocalStorage.get("cart"),
  },
  reducers: {
    getCart: (state, action) => {
      return {...state}
    },
  },
});

export const getCart = () => {
  return { type: "cart/getCart" };
};
export default CartSlice;
