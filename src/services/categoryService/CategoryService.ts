
import HttpClient from "../../utils/HtppClient";

// get list prodcut
const getCategory = async () => {
  try {
    const res = await HttpClient.get("category");
    return res;
  } catch (error) {
    console.log(error);
  }
};
// get prodcut by id
const getCategoryById = async (id: string | undefined) => {
  if (id) {
    try {
      const res = await HttpClient.get(`category/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};
// add prodcut
const addCategory = async (param: any) => {
  try {
    return await HttpClient.post(`category/add`, param);
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
const updateCategory = async (id: string | undefined, data: ParamUpdateUser) => {
  try {
    return await HttpClient.put(`category/update/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};
const removeCategory = async (id:string | undefined) => {
  try {
    return await HttpClient.delete(`category/remove/`+id);
  } catch (error) {
    console.log(error);
  }
};
export { getCategory, getCategoryById, addCategory, updateCategory,removeCategory};
