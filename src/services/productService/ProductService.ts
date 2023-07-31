import { AxiosRequestConfig } from "axios";
import { getTime } from "date-fns";
import HttpClient from "../../utils/HtppClient";
import { IProduct } from "Types/Interface/Product";
import { CommonResponse } from "Types/Interface/Common";

interface IFilter {
  limit: number;
  page: number;
  search: string;
  category: string;
}
// get list product
const getProduct = async (props: Partial<IFilter>) => {
  try {
    const res = await HttpClient.get("product", { params: props });
    return res;
  } catch (error) {
    console.log(error);
  }
};
interface IId {
  listId: string;
}
// get product by id
const getProductById = async (listId: IId) => {
  try {
    const res = await HttpClient.get(`productById/`, { params: listId });
    return res;
  } catch (error) {
    console.log(error);
  }
};
// get prodcut by id
const getProductByIds = async (id: string | undefined) => {
  if (id) {
    try {
      const res = await HttpClient.get(`findById/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};
// add product
const addProduct = async (param: any) => {
  try {
    return await HttpClient.post(`product/add`, param);
  } catch (error) {
    console.log(error);
  }
};
interface ParamUpdateUser {
  name: string;
  status: string;
  describe: string;
  file?: string;
  quantity: string;
  discount: string;
  price: string;
}
// add product
const updateProduct = async (id: string | undefined, data: ParamUpdateUser) => {
  try {
    return await HttpClient.put(`product/update/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};
const removeProduct = async (id: string | undefined) => {
  try {
    return await HttpClient.delete(`product/remove/` + id);
  } catch (error) {
    console.log(error);
  }
};
export { getProduct, getProductById, addProduct, updateProduct, removeProduct ,getProductByIds};
