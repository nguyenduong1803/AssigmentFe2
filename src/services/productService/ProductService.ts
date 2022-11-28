import { AxiosRequestConfig } from "axios";
import { getTime } from "date-fns";
import HttpClient from "../../utils/HtppClient";

// get list prodcut
const getProduct = async () => {
  try {
    const res = await HttpClient.get("product");
    return res;
  } catch (error) {
    console.log(error);
  }
};
// get prodcut by id
const getProductById = async (id: string | undefined) => {
  if (id) {
    try {
      const res = await HttpClient.get(`product/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};
// add prodcut
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
  file?: File;
  quantity: string;
  discount: string;
  price: string;
}
// add prodcut
const updateProduct = async (id: string | undefined, data: ParamUpdateUser) => {
  try {
    return await HttpClient.put(`product/update/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};
const removeProduct = async (id:string | undefined) => {
  try {
    return await HttpClient.delete(`product/remove/`+id);
  } catch (error) {
    console.log(error);
  }
};
export { getProduct, getProductById, addProduct, updateProduct,removeProduct};
