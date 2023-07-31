import { FormOrder } from "./../../Types/Interface/Order";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addOrder } from "services/orderService/order.service";
import LocalStorage from "utils/LocalStorage";

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    userId: "",
    address: "",
    phoneNumber: "",
    note: "",
    totalMoney: 0,
    loading: "idle",
    orderStatus: false,
  },
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(createOrder.pending, (state, action) => {
      state.loading = "loading";
      console.log(action.payload);
    });
    builders.addCase(createOrder.fulfilled, (state) => {
      state.loading = "idle";
    });
  },
});

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (payload: FormOrder, action) => {
    const res = await addOrder(payload);
    if (!res) {
      return { status: false };
    }
    if (res?.message === "thêm thành công") {
      LocalStorage.remove("cart");
      return { status: true };
    }
    return { status: false };
  }
);

export default OrderSlice;
