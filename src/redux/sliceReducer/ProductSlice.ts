
import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import HttpClient from 'utils/HtppClient';
import { CommonResponse, ResponseActionProduct } from 'Types/Interface/Common';
import { endpointProduct } from 'constants/endpoints';
import { TFormProduct } from 'utils/Validate/FormProduct';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;
interface ProductState {
  products: TFormProduct[];
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false
};
const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(actionGetProduct.fulfilled, (state, { payload }) => {
        state.products = payload || [];
        state.loading = false;
      })
      .addCase(actionAddProduct.fulfilled, (state, { payload }) => {
        if (payload) {
          state.products.push(payload);
        }
        state.loading = false;
      })
      .addCase(actionRemoveProduct.fulfilled, (state, { payload }) => {
        state.products = state.products && state.products.filter((item) => item._id !== payload);
        state.loading = false;
      })
      .addCase(actionUpdateProduct.fulfilled, (state, { payload }) => {
        if (payload) {
          const index = state.products.findIndex((item) => item._id === payload._id);
          state.products[index] = payload;
        }
        state.loading = false;
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true;
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false;
        }
      );
  }
});

export const actionAddProduct = createAsyncThunk('product/addProduct', async (payload: TFormProduct, action) => {
  try {
    const body = payload;
    const res = await HttpClient.post<TFormProduct, ResponseActionProduct>(endpointProduct.ADD, body);
    return res.product;
  } catch (error) {
    return null;
  }
});

export const actionGetProduct = createAsyncThunk('product/getProduct', async (payload, action) => {
  try {
    const res = await HttpClient.get<TFormProduct[], CommonResponse<TFormProduct[]>>(endpointProduct.GET_ALL);
    return res.data;
  } catch (error) {
    return null;
  }
});

export const actionRemoveProduct = createAsyncThunk('product/removeProduct', async (payload: string, action) => {
  try {
    const res = await HttpClient.delete(endpointProduct.REMOVE + payload);
    return payload;
  } catch (error) {
    return payload;
  }
});

export const actionUpdateProduct = createAsyncThunk(
  'product/UpdateProduct',
  async (payload: { id: string; body: TFormProduct }, action) => {
    const { id, body } = payload;
    try {
      const res = await HttpClient.put<TFormProduct, ResponseActionProduct>(endpointProduct.UPDATE + id, body);
      return res.product;
    } catch (error) {
      return null;
    }
  }
);
export { ProductSlice };
