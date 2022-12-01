import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./sliceReducer/ProductSlice";

const store = configureStore({
  reducer: ProductSlice.reducer,
});

export default store;
