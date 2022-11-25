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
const getProductById = async (id: string|undefined) => {
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
export { getProduct, getProductById, addProduct };
