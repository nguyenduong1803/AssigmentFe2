import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./sliceReducer/CartSlice";
import OrderSlice from "./sliceReducer/OrderSlice";
import { ProductSlice } from "./sliceReducer/ProductSlice";
import { useDispatch } from "react-redux";
import toastMessageSlice from "./sliceReducer/NotifySlice";

const store = configureStore({
  reducer: {
    ProductSlice: ProductSlice.reducer,
    OrderSlice: OrderSlice.reducer,
    CartSlice: CartSlice.reducer,
    MessageSlice: toastMessageSlice.reducer
  },
});


export const useAppDispatch = () => useDispatch<AppDispatch>();
// store.ts
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
