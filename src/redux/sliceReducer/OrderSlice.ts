import { FormOrder } from "./../../Types/Interface/Order";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addOrder } from "../../services/orderService/OrderService";
import { AppDispatch } from "../store";

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    userId: "",
    address: "",
    phoneNumber: "",
    note: "",
    totalMoney: 0,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(createOrder.pending, (state) => {
      state.status = "loading";
    });
    builders.addCase(createOrder.fulfilled, (state) => {
      state.status = "idle";
    });
  },
});

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (payload: FormOrder, action) => {
    const res = await addOrder(payload);
    return payload;
  }
);

export default OrderSlice;
