import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { login, verifyToken } from "../../services/UserService/Auth";
import LocalStorage from "../../utils/LocalStorage";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    username: "",
    email: "",
    status: "idle",
  },
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(parseToken.pending, (state) => {
      state.status = "loading";
    });
    builders.addCase(parseToken.fulfilled, (state, action) => {
      // state.status = "idle";
      // state.email = action.payload.email;
      // state.username = action.payload.username;
    });
  },
});

export const parseToken = createAsyncThunk(
  "auth/veifyToken",
  async (payload: string, action) => {
    const res = await verifyToken({ type: payload });
    console.log(res);
    return res;
  }
);
type FormData = {
  emai: string;
  password: string;
};

export const actionLogin = createAsyncThunk(
  "auth/veifyToken",
  async (payload: FormData, action) => {
    const res = await login(payload);
    console.log(res);
    if (!res) {
      return;
    }
    await LocalStorage.set("accessToken", res.token);
    await LocalStorage.set("typeLogin", "registed");
    return payload;
  }
);

export default AuthSlice;
